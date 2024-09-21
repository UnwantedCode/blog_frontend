//footer

import styles from './Footer.module.css'
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ApiUrls} from "../../assets/Api/ApiUrls.js";

function Footer() {
    const [categories, setCategories] = useState([]);
    const [articles, setArticles] = useState([]);
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateObj = new Date(dateString);
        return new Intl.DateTimeFormat('pl-PL', options).format(dateObj); // Formatuj datę na podstawie lokalizacji polskiej
    };
    useEffect(() => {
        fetch(`${ApiUrls.mainUrl}categories/`)
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });

        fetch(`${ApiUrls.mainUrl}posts/?page_size=4&sort_by_comments=desc`)
            .then(response => response.json())
            .then(data => {
                setArticles(data.results);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });

    }, []);
    return (
        <div className={styles.footerContainer}>
            <footer className={styles.footer}>
                <div className={styles.mainFooter}>
                    <div className={styles.footerSection}>
                        <h4 className={styles.heading}>Popularne wpisy</h4>
                        <ul className={styles.list}>

                            {articles.map(article => (
                                <li key={article.id} className={styles.listItem}>
                                    <a href="#" className={styles.link}>{article.title}</a>
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
                                    <a href="#" className={styles.link}>{category.title}</a>
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
{/*                <div className={styles.socialLinks}>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                </div>*/}
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