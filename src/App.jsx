import {HelmetProvider} from "react-helmet-async";
import "./assets/styles/index.css";
import React, {Suspense} from "react";
import {Loader} from "./Components/Loader/Loader.jsx";
import {ScrollToTopProvider, useScrollToTop} from "./Components/Context/ScrollToTopContext.jsx";
import {CacheProvider} from "./Components/Context/CacheContext.jsx";
import Builder from "./Containers/Builder/Builder.jsx";


function App() {
    return (
        <Suspense fallback={<Loader/>}>
            <HelmetProvider>
                <ScrollToTopProvider>
                    <CacheProvider>
                <Builder/>
                </CacheProvider>
            </ScrollToTopProvider>
            </HelmetProvider>
        </Suspense>
    )
}

export default App
