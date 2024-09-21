import styles from './RightPanel.module.css';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import TipForm from "../TipForm/TipForm.jsx";
import {ApiUrls} from "../../assets/Api/ApiUrls.js";

//show big image and some text under it
function RightPanel() {

    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`${ApiUrls.mainUrl}categories/`)
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });
    }, []);
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
                                <a key={category.id} className={styles.link} href={`/?kategoria=${category.id}`}>
                                    <div className={styles.category} key={category.id}>
                                        {category.title}
                                    </div>
                                </a>
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