import styles from "./Header.module.css";
import {Link} from "react-router-dom";

function Header() {


    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <nav className={styles.headerLeft}>
                        <Link to="/" className={styles.homeLink}>CyberBlog</Link>
                    </nav>

                    <nav className={styles.headerRight}>
                        <Link to="/o-mnie" className={styles.headerLink}>O mnie</Link>
                        <Link to="/kontakt" className={styles.headerLink}>Kontakt</Link>
                    </nav>


                </div>
            </header>
        </>
    )
}

export default Header