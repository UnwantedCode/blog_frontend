//footer

import styles from './Footer.module.css'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Footer() {
    const [categories, setCategories] = useState([]);
    const [articles, setArticles] = useState([]);
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateObj = new Date(dateString);
        return new Intl.DateTimeFormat('pl-PL', options).format(dateObj); // Formatuj datę na podstawie lokalizacji polskiej
    };
    useEffect(() => {
        fetch('http://localhost:8000/api/categories/')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });

        fetch('http://localhost:8000/api/posts/?page_size=4&sort_by_comments=desc')
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
                        <h4 className={styles.heading}>Popular Posts</h4>
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
                        <h4 className={styles.heading}>Categories</h4>
                        <ul className={styles.list}>
                            {categories.map(category => (
                                <li key={category.id} className={styles.listItem}>
                                    <a href="#" className={styles.link}>{category.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h4 className={styles.heading}>Colorlib Logo</h4>
                        <p>Awesome and completely free WordPress WooCommerce themes to take your ecommerce website to
                            the
                            next level.</p>
                        <p>If you are having problems with theme setup, please feel free to use Colorlib <a href="#"
                                                                                                            className={styles.link}>support
                            forum</a>.</p>
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
                    <a href="#">Home</a>
                    <a href="#">Full-Width Page</a>
                    <a href="#">Sample Page</a>
                    <a href="#">Languages</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className={styles.footerCredits}>
                    <span>Sparkling All rights reserved. Theme by <a href="#">Colorlib</a> Powered by <a
                        href="#">WordPress</a></span>
                </div>
            </div>
        </div>
    );

}

export default Footer;