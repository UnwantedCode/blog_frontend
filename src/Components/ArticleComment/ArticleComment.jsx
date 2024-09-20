import styles from './ArticleComment.module.css';

//show big image and some text under it
function ArticleComment({item}) {

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateObj = new Date(dateString);
        return new Intl.DateTimeFormat('pl-PL', options).format(dateObj); // Formatuj datę na podstawie lokalizacji polskiej
    };

    return (
        <>
            <div className={styles.item}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.date}>{formatDate(item.created_at)}</div>
                <div className={styles.text} dangerouslySetInnerHTML={{__html: item.content}}>
                </div>
            </div>

        </>
    )
        ;
}

export default ArticleComment;