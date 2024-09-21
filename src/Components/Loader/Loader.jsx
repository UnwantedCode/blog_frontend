import styles from './Loader.module.css'

export function Loader(props) {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
        </div>
    );
}