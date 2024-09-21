import {HelmetProvider} from "react-helmet-async";
import Header from "./Containers/Header/Header.jsx";
import "./assets/styles/index.css";
import Footer from "./Containers/Footer/Footer.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ModalDonate from "./Components/ModalDonate/ModalDonate.jsx";
import React, {Suspense} from "react";
import {Loader} from "./Components/Loader/Loader.jsx";

const MainPage = React.lazy(() => import('./Containers/MainPage/MainPage.jsx'));
const Article = React.lazy(() => import('./Containers/Article/Article.jsx'));
const TextPage = React.lazy(() => import('./Containers/TextPage/TextPage.jsx'));

function App() {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    return (
        <Suspense fallback={<Loader/>}>
            {/*{React.lazy(() => delay(3000000).then(console.log('Loading...')))}*/}

            <HelmetProvider>
                <Router>

                    <Header/>
                    <ModalDonate/>
                    <Routes>

                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/artykul/:id" element={<Article/>}/>
                        <Route path="/o-mnie" element={<TextPage id={1}/>}/>
                        <Route path="/kontakt" element={<TextPage id={2}/>}/>
                        <Route path="*" element={<MainPage/>}/>
                    </Routes>

                    <Footer/>

                </Router>

            </HelmetProvider>
        </Suspense>
    )
}

export default App
