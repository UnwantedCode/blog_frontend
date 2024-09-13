import {Helmet} from "react-helmet-async";
import styles from './TextPage.module.css';
import RightPanel from "../../Components/RightPanel/RightPanel.jsx";

//show big image and some text under it
function TextPage() {
    return (
        <>
            <Helmet>
                <title>Strona glówna</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.mainLeft}>


                </div>
                <RightPanel/>
            </div>


            {/*<MainPageSlider />*/}
        </>
    );
}

export default TextPage;