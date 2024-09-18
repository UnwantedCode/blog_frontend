import styles from './ArticleItem.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment,faCalendar} from "@fortawesome/free-solid-svg-icons";
import RightPanel from "../RightPanel/RightPanel.jsx";
//show big image and some text under it
function ArticleItem({item}) {

    // Funkcja formatująca datę
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateObj = new Date(dateString);
        return new Intl.DateTimeFormat('pl-PL', options).format(dateObj); // Formatuj datę na podstawie lokalizacji polskiej
    };

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
                            {item.comments_count} komentarze
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