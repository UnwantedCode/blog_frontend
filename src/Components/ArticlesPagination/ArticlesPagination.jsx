import styles from "../../Components/ArticlesPagination/ArticlesPagination.module.css";

function ArticlesPagination({currentPage,totalPages,searchParams,setSearchParams, articlesRef   }) {
    // Funkcja do przewijania w określonym czasie
    const smoothScroll = (targetY, duration) => {
        const startY = window.pageYOffset;
        const difference = targetY - startY;
        let startTime = null;

        const scroll = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Od 0 do 1
            window.scrollTo(0, startY + difference * progress);
            if (timeElapsed < duration) {
                requestAnimationFrame(scroll);
            }
        };

        requestAnimationFrame(scroll);
    };

    // Funkcja do przewijania do góry (do pierwszego artykułu)
    const scrollToTop = () => {
        if (articlesRef.current) {
            const topOffset = articlesRef.current.offsetTop;
            smoothScroll(topOffset, 700); // Przewijanie w 500ms
        }
    };
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setSearchParams({...Object.fromEntries(searchParams), strona: currentPage + 1});
            scrollToTop(); // Przewiń do góry po zmianie strony
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setSearchParams({...Object.fromEntries(searchParams), strona: currentPage - 1});
            scrollToTop(); // Przewiń do góry po zmianie strony
        }
    };

    const handlePageClick = (strona) => {
        setSearchParams({...Object.fromEntries(searchParams), strona});
        scrollToTop(); // Przewiń do góry po zmianie strony

    };

    return (
        <div className={styles.pagination}>
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`${styles.paginationButton} ${styles.paginationButtonFirst}`}
                style={{ visibility: currentPage === 1 ? 'hidden' : 'visible' }}
            >
                Poprzednia
            </button>
            {/* Wyświetlanie numerów stron */}
            <div className={styles.paginationButtonsWrapper}>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageClick(index + 1)}
                        className={`${styles.paginationButton} ${index + 1 === currentPage ? styles.activePage : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`${styles.paginationButton} ${styles.paginationButtonLast}`}
                    style={{ visibility: currentPage === totalPages ? 'hidden' : 'visible' }}
                >
                    Następna
                </button>
            </div>
            )
            }

            export default ArticlesPagination;
