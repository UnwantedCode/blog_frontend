import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {CacheContext} from "../../Components/Context/CacheContext.jsx";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function Header() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { categories } = useContext(CacheContext);
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <nav className={styles.headerLeft}>
                        <Link to="/" className={styles.homeLink} title="Kliknij, aby przejść do strony">
                            CyberBlog
                        </Link>
                    </nav>
                    <div className={styles.mobileMenuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <nav className={`${styles.headerRight} ${menuOpen ? styles.menuActive : ""}`}>
                        <Link to="/o-mnie" className={styles.headerLink} title="Kliknij, aby przejść do strony głównej">
                            O mnie
                        </Link>
                        <div
                            className={`${styles.dropdown} ${dropdownOpen ? styles.dropdownOpen : ""}`}
                            onMouseEnter={() => setDropdownOpen(true)}

                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <span className={styles.headerLink}>Więcej</span>
                            {dropdownOpen && (
                                <ul className={styles.dropdownMenu}>
                                    {categories.map(category => (
                                        <li key={category.id}>
                                            <Link to={`/?kategoria=${category.id}-${category.slug}`}
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
                        <a target={"_blank"} href={"http://kapalka.psor24.eu"} className={styles.headerLink}
                           title="Kliknij, aby przejść do strony">
                            Strona Partnera
                        </a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header