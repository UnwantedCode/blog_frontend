import styles from './ArticleItem.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment,faCalendar} from "@fortawesome/free-solid-svg-icons";
import RightPanel from "../RightPanel/RightPanel.jsx";
import {commentFormater, formatDate} from "../Helpers/Functions.jsx";
import {Link} from "react-router-dom";

function ArticleItem({item, showConent}) {


    return (
        <>
            <div className={styles.item}>
                <div className={styles.image}
                     style={{backgroundImage: `url("${item.image}")`}}/>
                <div className={styles.content}>
                    <Link to={`/artykul/${item.id}-${item.slug}`} className={styles.link}>
                        <div className={styles.title}>
                            <h1>{item.title}</h1>
                        </div>
                    </Link>
                    <div className={styles.info}>
                        <div className={styles.date}>
                            <FontAwesomeIcon icon={faCalendar} className={styles.icon}/>
                            {formatDate(item.published_at)}
                        </div>
                        <div className={styles.comments}>
                            <FontAwesomeIcon icon={faComment} className={styles.icon}/>
                            {commentFormater(item.comments_count)}
                        </div>
                    </div>
                    <div className={styles.text}>
                        <p dangerouslySetInnerHTML={{ __html: showConent ? item.content : item.summary}}></p>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default ArticleItem;