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
                            <input type="text" placeholder=""/>
                            <button className={styles.button}>SZUKAJ</button>
                        </div>
                    </div>
                    <div className={styles.categoryContainer}>
                        <div className={styles.title}>
                            Kategorie
                        </div>
                        <div className={styles.categories}>
                            <a className={styles.link} href="/some-path">
                                <div className={styles.category}>Kategoria 1</div>
                            </a>                            <a className={styles.link} href="/some-path">
                                <div className={styles.category}>Kategoria 1</div>
                            </a>                            <a className={styles.link} href="/some-path">
                                <div className={styles.category}>Kategoria 1</div>
                            </a>                            <a className={styles.link} href="/some-path">
                                <div className={styles.category}>Kategoria 1</div>
                            </a>


                        </div>
                    </div>
                </div>
            </div>


            {/*<MainPageSlider />*/}
        </>
    );
}

export default MainPage;