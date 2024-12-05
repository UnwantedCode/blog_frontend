import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {CacheContext} from "../../Components/Context/CacheContext.jsx";

function Header() {

    const [showDropdown, setShowDropdown] = useState(false);
    const { categories } = useContext(CacheContext);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <nav className={styles.headerLeft}>
                        <Link to="/" className={styles.homeLink} title="Kliknij, aby przejść do strony">
                            CyberBlog
                        </Link>
                    </nav>

                    <nav className={styles.headerRight}>
                        <Link to="/o-mnie" className={styles.headerLink} title="Kliknij, aby przejść do strony głównej">
                            O mnie
                        </Link>
                        <div
                            className={styles.dropdown}
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <span className={styles.headerLink}>Więcej</span>
                            {showDropdown && (
                                <ul className={styles.dropdownMenu}>
                                    {categories.map(category => (
                                        <li>
                                            <Link to={`/?kategoria=${category.id}-${category.slug}`} key={category.id}
                                                  className={styles.dropdownLink}>
                                                {category.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <Link to="/kontakt" className={styles.headerLink} title="Kliknij, aby przejść do strony">
                            Kontakt
                        </Link>
                        <a target={"_blank"} href={"http://kapalka.psor24.eu"} className={styles.headerLink} title="Kliknij, aby przejść do strony">
                            Strona Partnera
                        </a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header