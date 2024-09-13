import {Helmet} from "react-helmet-async";
import styles from './MainPage.module.css';
import ArticleItem from "../../Components/ArticleItem/ArticleItem.jsx";
import RightPanel from "../../Components/RightPanel/RightPanel.jsx";
import MainPageSlider from "../../Components/MainPageSlider/MainPageSlider.jsx";

//show big image and some text under it
function MainPage() {
    return (
        <>
            <Helmet>
                <title>Strona glówna</title>
            </Helmet>
            {/*<MainPageSlider />*/}

            <div className={styles.container}>
                <div className={styles.mainLeft}>
                    <ArticleItem/>
                    <ArticleItem/>
                    <ArticleItem/>
                    <ArticleItem/>

                </div>
                <RightPanel/>
            </div>


        </>
    );
}

export default MainPage;