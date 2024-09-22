import styles from "../../Components/ArticlesPagination/ArticlesPagination.module.css";
import {useScrollToTop} from "../Context/ScrollToTopContext.jsx";

function ArticlesPagination({currentPage,totalPages,searchParams,setSearchParams   }) {

    const {scrollToTop} = useScrollToTop();
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setSearchParams({...Object.fromEntries(searchParams), strona: currentPage + 1});
            scrollToTop();
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setSearchParams({...Object.fromEntries(searchParams), strona: currentPage - 1});
            scrollToTop();
        }
    };

    const handlePageClick = (strona) => {
        setSearchParams({...Object.fromEntries(searchParams), strona});
        scrollToTop();

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
