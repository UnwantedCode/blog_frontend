import {Helmet} from "react-helmet-async";
import styles from './MainPage.module.css';
import ArticleItem from "../../Components/ArticleItem/ArticleItem.jsx";
import RightPanel from "../../Components/RightPanel/RightPanel.jsx";
import MainPageSlider from "../../Components/MainPageSlider/MainPageSlider.jsx";
import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import ArticlesPagination from "../../Components/ArticlesPagination/ArticlesPagination.jsx";

//show big image and some text under it
function MainPage() {
    // get q from url query
    const [searchParams, setSearchParams] = useSearchParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);   // Dodajemy stan dla łącznej liczby stron
    const pageSize = 5
    const currentPage = parseInt(searchParams.get('page')) || 1; // Ustal currentPage na podstawie searchParams

    useEffect(() => {
        const query = searchParams.get('q') ? `&search=${searchParams.get('q')}` : '';
        const category = searchParams.get('category') ? `&categories=${searchParams.get('category')}` : '';
        const page = `&page=${currentPage}`; // Zmiana, używamy currentPage do ustalenia strony

        fetch('http://localhost:8000/api/posts/?page_size='+pageSize+query+category+page)
            .then(response => response.json())
            .then(data => {
                setArticles(data.results);
                setTotalPages(Math.ceil(data.count / pageSize)); // Ustalanie liczby stron na podstawie liczby wyników
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false);
            });
    }, [searchParams, currentPage]);
    // Funkcje obsługujące nawigację po stronach


    return (
        <>
            <Helmet>
                <title>Strona glówna</title>
            </Helmet>
            {/*<MainPageSlider />*/}

            <div className={styles.container}>
                <div className={styles.mainLeft}>
                    {loading ? ( // Wyświetl wiadomość ładowania podczas fetch
                        <p>Loading articles...</p>
                    ) : (
                        <>
                            {articles.map(article => (
                                    <>
                                        <ArticleItem
                                            key={article.id}
                                            item={article}
                                        />

                                    </>
                                )
                            )}
                            <ArticlesPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                searchParams={searchParams}
                                setSearchParams={setSearchParams}
                            />
                        </>


                    )}
                </div>
                <RightPanel/>
            </div>


        </>
    );
}

export default MainPage;