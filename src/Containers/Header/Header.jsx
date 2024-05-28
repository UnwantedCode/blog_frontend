import styles from "./Header.module.css";
import {Link} from "react-router-dom";

function Header() {


    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerLeft}>
                        <a className={styles.homeLink}>Strona głowna</a>
                    </div>

                    <div className={styles.headerRight}>

                    </div>


                </div>
            </header>
        </>
    )
}

export default Header