import styles from "../../Components/ArticlesPagination/ArticlesPagination.module.css";

function ArticlesPagination({currentPage,totalPages,searchParams,setSearchParams }) {
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setSearchParams({...Object.fromEntries(searchParams), page: currentPage + 1});
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setSearchParams({...Object.fromEntries(searchParams), page: currentPage - 1});
        }
    };

    const handlePageClick = (page) => {
        setSearchParams({...Object.fromEntries(searchParams), page});

    };

    return (
        <div className={styles.pagination}>
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={styles.paginationButton}
            >
                Poprzednia
            </button>
            {/* Wyświetlanie numerów stron */}
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => handlePageClick(index + 1)}
                    className={`${styles.paginationButton} ${index + 1 === currentPage ? styles.activePage : ''}`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={styles.paginationButton}
            >
                Następna
            </button>
        </div>
    )
}

export default ArticlesPagination;
