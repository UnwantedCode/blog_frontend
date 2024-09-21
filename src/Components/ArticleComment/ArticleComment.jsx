import styles from './ArticleComment.module.css';
import {formatDate} from "../Helpers/Functions.jsx";


function ArticleComment({item}) {



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