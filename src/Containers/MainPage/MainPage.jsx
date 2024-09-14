import {Helmet} from "react-helmet-async";
import styles from './MainPage.module.css';
import ArticleItem from "../../Components/ArticleItem/ArticleItem.jsx";
import RightPanel from "../../Components/RightPanel/RightPanel.jsx";
import MainPageSlider from "../../Components/MainPageSlider/MainPageSlider.jsx";
import {useEffect, useState} from "react";

//show big image and some text under it
function MainPage() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8000/api/posts/?page_size=30')
            .then(response => response.json())
            .then(data => {
                setArticles(data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false);
            });
    }, []);

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
                    ) : (articles.map(article => (
                    <ArticleItem
                        key={article.id}
                        item={article}
                    />
                    )))}
                </div>
                <RightPanel/>
            </div>


        </>
    );
}

export default MainPage;