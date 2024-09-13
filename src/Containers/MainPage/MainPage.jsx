import {Helmet} from "react-helmet-async";
import styles from './MainPage.module.css';
import ArticleItem from "../../Components/ArticleItem/ArticleItem.jsx";
import RightPanel from "../../Components/RightPanel/RightPanel.jsx";

//show big image and some text under it
function MainPage() {
    return (
        <>
            <Helmet>
                <title>Strona glówna</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.mainLeft}>
                    <ArticleItem/>
                    <ArticleItem/>
                    <ArticleItem/>
                    <ArticleItem/>

                </div>
                <RightPanel/>
            </div>


            {/*<MainPageSlider />*/}
        </>
    );
}

export default MainPage;