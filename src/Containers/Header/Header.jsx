import styles from "./Header.module.css";
import {Link} from "react-router-dom";

function Header() {


    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerLeft}>
                        <Link to="/" className={styles.homeLink}>CyberBlog</Link>
                    </div>

                    <div className={styles.headerRight}>
                        <Link to="/o-mnie" className={styles.headerLink}>O mnie</Link>
                        <Link to="/kontakt" className={styles.headerLink}>Kontakt</Link>
                    </div>


                </div>
            </header>
        </>
    )
}

export default Header