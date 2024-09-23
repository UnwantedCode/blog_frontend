

import styles from './Footer.module.css'
import {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ApiUrls} from "../../assets/Api/ApiUrls.js";
import {formatDate} from "../../Components/Helpers/Functions.jsx";
import {useScrollToTop} from "../../Components/Context/ScrollToTopContext.jsx";
import {CacheContext} from "../../Components/Context/CacheContext.jsx";

function Footer() {
    const { categories, articles } = useContext(CacheContext);
    const {scrollToTop} = useScrollToTop();

    return (
        <div className={styles.footerContainer}>
            <footer className={styles.footer}>
                <div className={styles.mainFooter}>
                    <div className={styles.footerSection}>
                        <h4 className={styles.heading}>Popularne wpisy</h4>
                        <ul className={styles.list}>

                            {articles.map(article => (
                                <li key={article.id} className={styles.listItem}>
                                    <Link to={`/artykul/${article.id}-${article.slug}`} className={styles.link}>
                                            {article.title}
                                    </Link>
                                    <span className={styles.date}>{formatDate(article.created_at)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h4 className={styles.heading}>Kategorie</h4>
                        <ul className={styles.list}>
                            {categories.map(category => (
                                <li key={category.id} className={styles.listItem}>
                                    <Link to={`/?kategoria=${category.id}-${category.slug}`} className={styles.link} onClick={scrollToTop}>{category.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h4 className={styles.heading}>Cel projektu</h4>
                        <p>Projekt został stworzony na potrzeby przedmiotu "Technologie aplikacji internetowych"</p>
                    </div>
                </div>

            </footer>
            <div className={styles.bottomFooter}>
                <div className={styles.footerNav}>
                    <Link to="/" className={styles.navLink}>Strona główna</Link>
                    <Link to="/o-mnie" className={styles.navLink}>O mnie</Link>
                    <Link to="/kontakt" className={styles.navLink}>Kontakt</Link>
                </div>
                <div className={styles.footerCredits}>
                    <span>Copyright AdamT {(new Date().getFullYear())}</span>
                </div>
            </div>
        </div>
    );

}

export default Footer;