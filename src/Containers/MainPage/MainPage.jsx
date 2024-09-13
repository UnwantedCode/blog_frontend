import {Helmet} from "react-helmet-async";
import MainPageSlider from "../../Components/MainPageSlider/MainPageSlider.jsx";
import ArticleMainPage from "../../Components/ArticleMainPage/ArticleMainPage.jsx";
import styles from './MainPage.module.css';

//show big image and some text under it
function MainPage() {
    return (
        <>
            <Helmet>
                <title>Strona glówna</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.mainLeft}>
            <ArticleMainPage />
            <ArticleMainPage />
            <ArticleMainPage />
            <ArticleMainPage />

                </div>
                <div className={styles.mainRight}>
                    <div className={styles.searchContainter}>
                        <div className={styles.title}>
                            Szukaj
                        </div>
                        <div className={styles.search}>
                            <input type="text" placeholder="Szukaj"/>
                            <button>Szukaj</button>
                        </div>
                    </div>
                </div>
            </div>


            {/*<MainPageSlider />*/}
        </>
    );
}

export default MainPage;