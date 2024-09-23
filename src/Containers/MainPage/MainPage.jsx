import {Helmet} from "react-helmet-async";
import styles from './MainPage.module.css';
import ArticleItem from "../../Components/ArticleItem/ArticleItem.jsx";
import {useEffect, useRef, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import ArticlesPagination from "../../Components/ArticlesPagination/ArticlesPagination.jsx";
import {ApiUrls} from "../../assets/Api/ApiUrls.js";
import {changeHelmetTitle} from "../../Components/Helpers/Functions.jsx";
import {useScrollToTop} from "../../Components/Context/ScrollToTopContext.jsx";


function MainPage() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 5
    const currentPage = parseInt(searchParams.get('strona')) || 1;
    useEffect(() => {
        const query = searchParams.get('q') ? `&search=${searchParams.get('q')}` : '';
        const category = searchParams.get('kategoria') ? `&categories=${parseInt(searchParams.get('kategoria'))}` : '';
        const page = `&page=${currentPage}`;

        fetch(`${ApiUrls.mainUrl}posts/?page_size=`+pageSize+query+category+page)
            .then(response => response.json())
            .then(data => {
                setArticles(data.results);
                setTotalPages(Math.ceil(data.count / pageSize));
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false);
            });
    }, [searchParams, currentPage]);



    return (
        <>
            {changeHelmetTitle('Strona główna')}
            <Helmet>
                <meta name={"description"} content={"Najnowsze artykuły na temat IT"}/>
            </Helmet>
                    {loading ? (
                     <></>
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
                            {(articles.length !== 0 )? (
                                <ArticlesPagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    searchParams={searchParams}
                                    setSearchParams={setSearchParams}
                                />
                            ) : (
                                <div className={styles.noArticles}>
                                    Brak artykułów spełniających kryteria wyszukiwania
                                </div>
                            )}

                        </>
                    )}
        </>
    );
}

export default MainPage;