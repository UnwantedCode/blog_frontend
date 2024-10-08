import styles from './RightPanel.module.css';
import {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import TipForm from "../TipForm/TipForm.jsx";
import {ApiUrls} from "../../assets/Api/ApiUrls.js";
import {useScrollToTop} from "../Context/ScrollToTopContext.jsx";
import {CacheContext} from "../Context/CacheContext.jsx";


function RightPanel() {
    const {scrollToTop} = useScrollToTop();

    const { categories } = useContext(CacheContext);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/?q=${encodeURIComponent(searchQuery)}`);navigate(0);
        }
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
            scrollToTop();
        }
    };

    return (
        <>
                <div className={styles.mainRight}>
                    <div className={styles.searchContainter}>
                        <div className={styles.title}>
                            Szukaj
                        </div>
                        <div className={styles.search}>
                            <input type="text"
                                   placeholder=""

                                   value={searchQuery}
                                   onChange={handleInputChange}
                                   onKeyPress={handleKeyPress}
                            />
                            <button className={styles.button} onClick={handleSearch}>SZUKAJ</button>
                        </div>
                    </div>
                    <div className={styles.categoryContainer}>
                        <div className={styles.title}>
                            Kategorie
                        </div>
                        <div className={styles.categories}>
                            {categories.map(category => (
                                <Link to={`/?kategoria=${category.id}-${category.slug}`} key={category.id} className={styles.link} onClick={scrollToTop}>
                                    <div className={styles.category} key={category.id}>
                                        {category.title}
                                    </div>
                                </Link>
                            ))}
                                {/*    <a className={styles.link} href="/some-path">*/}
                                {/*        <div className={styles.category}>Kategoria 1</div>*/}
                                {/*    </a> <a className={styles.link} href="/some-path">*/}
                                {/*    <div className={styles.category}>Kategoria 1</div>*/}
                                {/*</a> <a className={styles.link} href="/some-path">*/}
                                {/*    <div className={styles.category}>Kategoria 1</div>*/}
                                {/*</a> <a className={styles.link} href="/some-path">*/}
                                {/*    <div className={styles.category}>Kategoria 1</div>*/}
                                {/*</a>*/}


                                </div>
                                </div>


                    <TipForm />

                </div>



        </>
    );
}

export default RightPanel;