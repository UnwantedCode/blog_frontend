import styles from './ArticleComment.module.css';

//show big image and some text under it
function ArticleComment() {


    return (
        <>
            <div className={styles.item}>
                <div className={styles.name}>Komentator</div>
                <div className={styles.date}>2024-09-13 o 01:56</div>
                <div className={styles.text}>
                    Cześć, to jest komentarz.<br/>
                        Aby zapoznać się z moderowaniem, edycją i usuwaniem komentarzy, należy odwiedzić ekran
                        komentarzy w kokpicie.<br/>
                        Awatary komentujących pochodzą.

                </div>
            </div>
        </>
    )
        ;
}

export default ArticleComment;