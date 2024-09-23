import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "../Header/Header.jsx";
import ModalDonate from "../../Components/ModalDonate/ModalDonate.jsx";
import styles from "./Builder.module.css";
import RightPanel from "../../Components/RightPanel/RightPanel.jsx";
import Footer from "../Footer/Footer.jsx";
import React from "react";
import {useScrollToTop} from "../../Components/Context/ScrollToTopContext.jsx";

const MainPage = React.lazy(() => import('../MainPage/MainPage.jsx'));
const Article = React.lazy(() => import('../Article/Article.jsx'));
const TextPage = React.lazy(() => import('../TextPage/TextPage.jsx'));

function Builder() {
    const {articlesRef, scrollToTop} = useScrollToTop();

    return (
        <>
            <Router>

                <Header/>
                <ModalDonate/>
                <div className={styles.container}>
                    <div ref={articlesRef} className={styles.mainLeft}>
                        <Routes>

                            <Route path="/" element={<MainPage/>}/>
                            <Route path="/artykul/:id" element={<Article/>}/>
                            <Route path="/o-mnie" element={<TextPage id={1}/>}/>
                            <Route path="/kontakt" element={<TextPage id={2}/>}/>
                            <Route path="*" element={<MainPage/>}/>

                        </Routes>
                    </div>
                    <RightPanel/>
                </div>

                <Footer/>

            </Router>
        </>
    );
}

export default Builder;