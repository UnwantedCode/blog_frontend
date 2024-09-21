import styles from './ArticleItem.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment,faCalendar} from "@fortawesome/free-solid-svg-icons";
import RightPanel from "../RightPanel/RightPanel.jsx";
import {commentFormater, formatDate} from "../Helpers/Functions.jsx";

function ArticleItem({item}) {


    return (
        <>
            <div className={styles.item}>
                <div className={styles.image}
                     style={{backgroundImage: `url("${item.image}")`}}/>
                <div className={styles.content}>
                    <a href={`/artykul/${item.id}`} className={styles.link}>
                        <div className={styles.title}>
                            <h1>{item.title}</h1>
                        </div>
                    </a>
                    <div className={styles.info}>
                        <FontAwesomeIcon icon={faCalendar} className={styles.icon}/>
                        <div className={styles.date}>
                            {formatDate(item.published_at)}
                        </div>
                        <FontAwesomeIcon icon={faComment} className={styles.icon}/>
                        <div className={styles.comments}>
                            {commentFormater(item.comments_count)}
                        </div>
                    </div>
                    <div className={styles.text}>
                        <p dangerouslySetInnerHTML={{ __html: item.summary }}></p>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default ArticleItem;