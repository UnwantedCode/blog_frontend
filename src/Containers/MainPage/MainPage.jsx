import {Helmet} from "react-helmet-async";
import styles from './MainPage.module.css';
import ArticleItem from "../../Components/ArticleItem/ArticleItem.jsx";
import RightPanel from "../../Components/RightPanel/RightPanel.jsx";
import MainPageSlider from "../../Components/MainPageSlider/MainPageSlider.jsx";
import {useEffect, useRef, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import ArticlesPagination from "../../Components/ArticlesPagination/ArticlesPagination.jsx";
import {ApiUrls} from "../../assets/Api/ApiUrls.js";


function MainPage() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 5
    const currentPage = parseInt(searchParams.get('strona')) || 1;
    const articlesRef = useRef(null);

    useEffect(() => {
        const query = searchParams.get('q') ? `&search=${searchParams.get('q')}` : '';
        const category = searchParams.get('kategoria') ? `&categories=${searchParams.get('kategoria')}` : '';
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
            <Helmet>
                <title>Strona glówna</title>
            </Helmet>
            {/*<MainPageSlider />*/}

            <div className={styles.container}>
                <div ref={articlesRef} className={styles.mainLeft}>
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
                            <ArticlesPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                searchParams={searchParams}
                                setSearchParams={setSearchParams}
                                articlesRef={articlesRef}
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