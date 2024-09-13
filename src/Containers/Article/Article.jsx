import {Helmet} from "react-helmet-async";
import styles from './Article.module.css';
import ArticleItem from "../../Components/ArticleItem/ArticleItem.jsx";
import RightPanel from "../../Components/RightPanel/RightPanel.jsx";
import ArticleComment from "../../Components/ArticleComment/ArticleComment.jsx";

//show big image and some text under it
function Article() {
    return (
        <>
            <Helmet>
                <title>Strona glówna</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.mainLeft}>
                    <ArticleItem/>
                    <ArticleComment />
                    <div className={styles.comment}>
                        <div className={styles.title}>Dodaj komentarz</div>
                        <div className={styles.description}>Twój adres e-mail nie zostanie opublikowany. Wymagane pola są oznaczone *</div>
                        <div className={styles.form}>
                            <div className={styles.label}>Komentarz *</div>
                            <textarea className={styles.textarea}></textarea>
                            <div className={styles.label}>Nazwa *</div>
                            <input className={styles.input}/>
                            <div className={styles.label}>E-mail *</div>
                            <input className={styles.input}/>
                            <p>
                            <button className={styles.button}>Wyślij komentarz</button>
                            </p>
                        </div>
                    </div>


                </div>
                <RightPanel/>
            </div>


            {/*<MainPageSlider />*/}
        </>
    );
}

export default Article;