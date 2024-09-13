import styles from './RightPanel.module.css';

//show big image and some text under it
function RightPanel() {
    return (
        <>
                <div className={styles.mainRight}>
                    <div className={styles.searchContainter}>
                        <div className={styles.title}>
                            Szukaj
                        </div>
                        <div className={styles.search}>
                            <input type="text" placeholder=""/>
                            <button className={styles.button}>SZUKAJ</button>
                        </div>
                    </div>
                    <div className={styles.categoryContainer}>
                        <div className={styles.title}>
                            Kategorie
                        </div>
                        <div className={styles.categories}>
                            <a className={styles.link} href="/some-path">
                                <div className={styles.category}>Kategoria 1</div>
                            </a>                            <a className={styles.link} href="/some-path">
                                <div className={styles.category}>Kategoria 1</div>
                            </a>                            <a className={styles.link} href="/some-path">
                                <div className={styles.category}>Kategoria 1</div>
                            </a>                            <a className={styles.link} href="/some-path">
                                <div className={styles.category}>Kategoria 1</div>
                            </a>


                        </div>
                    </div>
                </div>


        </>
    );
}

export default RightPanel;