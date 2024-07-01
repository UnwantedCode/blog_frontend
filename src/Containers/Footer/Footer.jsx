//footer

import styles from './Footer.module.css'

function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.mainFooter}>
                <div className={styles.footerSection}>
                    <h4 className={styles.heading}>Popular Posts</h4>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <img src="link-do-obrazka" alt="Post 1" className={styles.image}/>
                            <a href="#" className={styles.link}>How to Use WordPress Pingbacks And Trackbacks</a>
                            <span className={styles.date}>April 7, 2015</span>
                        </li>
                        <li className={styles.listItem}>
                            <img src="link-do-obrazka" alt="Post 2" className={styles.image}/>
                            <a href="#" className={styles.link}>This is how comments will be displayed on Sparkling WP
                                Theme</a>
                            <span className={styles.date}>January 3, 2015</span>
                        </li>
                        <li className={styles.listItem}>
                            <img src="link-do-obrazka" alt="Post 3" className={styles.image}/>
                            <a href="#" className={styles.link}>We Created This Awesome Free WordPress Theme To Set New
                                Industry Standard</a>
                            <span className={styles.date}>April 6, 2015</span>
                        </li>
                        <li className={styles.listItem}>
                            <img src="link-do-obrazka" alt="Post 4" className={styles.image}/>
                            <a href="#" className={styles.link}>Post Format: WordPress Tiled Gallery</a>
                            <span className={styles.date}>March 28, 2015</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h4 className={styles.heading}>Categories</h4>
                    <ul className={styles.list}>
                        <li>Post Formats (16)</li>
                        <li>Uncategorized (10)</li>
                        <li>Template (10)</li>
                        <li>Markup (6)</li>
                        <li>Edge Case (6)</li>
                        <li>Slider (3)</li>
                        <li>Media (2)</li>
                        <li>Featured (2)</li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h4 className={styles.heading}>Colorlib Logo</h4>
                    <p>Awesome and completely free WordPress WooCommerce themes to take your ecommerce website to the
                        next level.</p>
                    <p>If you are having problems with theme setup, please feel free to use Colorlib <a href="#"
                                                                                                        className={styles.link}>support
                        forum</a>.</p>
                </div>
            </div>
            <div className={styles.bottomFooter}>
                <div className={styles.socialLinks}>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                </div>
                <div className={styles.footerNav}>
                    <a href="#">Home</a>
                    <a href="#">Full-Width Page</a>
                    <a href="#">Sample Page</a>
                    <a href="#">Languages</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className={styles.footerCredits}>
                    <span>Sparkling All rights reserved. Theme by <a href="#">Colorlib</a> Powered by <a href="#">WordPress</a></span>
                </div>
            </div>
        </footer>
    );

}

export default Footer;