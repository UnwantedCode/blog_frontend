
import {HelmetProvider} from "react-helmet-async";
import Header from "./Containers/Header/Header.jsx";
import MainPage from "./Containers/MainPage/MainPage.jsx";
import "./assets/styles/index.css";
import Footer from "./Containers/Footer/Footer.jsx";

function App() {

  return (
      <HelmetProvider>

              <Header />
          <MainPage />
          <Footer />

      </HelmetProvider>
  )
}

export default App
