import styles from './ArticleItem.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment,faCalendar} from "@fortawesome/free-solid-svg-icons";
import RightPanel from "../RightPanel/RightPanel.jsx";
//show big image and some text under it
function ArticleItem() {


    return (
        <>


            <div className={styles.item}>


                <div className={styles.image}
                     style={{backgroundImage: `url("https://www.google.com/search/static/gs/animal/cover_images/m01yrx_cover.png")`}}/>
                <div className={styles.content}>
                    <a href="/some-path" className={styles.link}>
                        <div className={styles.title}>
                            <h1>ARTYKUŁ 1</h1>
                        </div>
                    </a>

                    <div className={styles.info}>
                        <FontAwesomeIcon icon={faCalendar} className={styles.icon}/>
                        <div className={styles.date}>
                            2021-03-01
                        </div>
                        <FontAwesomeIcon icon={faComment} className={styles.icon}/>
                        <div className={styles.comments}>
                            3 comments
                        </div>
                    </div>
                    <div className={styles.text}>
                        <p>Some description for the first article.</p>
                    </div>


                </div>


            </div>
        </>
    )
        ;
}

export default ArticleItem;