
import {HelmetProvider} from "react-helmet-async";
import Header from "./Containers/Header/Header.jsx";
import MainPage from "./Containers/MainPage/MainPage.jsx";
import "./assets/styles/index.css";
import Footer from "./Containers/Footer/Footer.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ArticleItem from "./Components/ArticleItem/ArticleItem.jsx";
import Article from "./Containers/Article/Article.jsx";

function App() {

  return (
      <HelmetProvider>
          <Router>

          <Header />
              <Routes>

              <Route path="/" element={<MainPage />} />
              <Route path="/artykul/:id" element={<Article />} />
              <Route path="*" element={<MainPage />} />
              </Routes>

              <Footer />

          </Router>

      </HelmetProvider>
  )
}

export default App
