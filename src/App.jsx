
import {HelmetProvider} from "react-helmet-async";
import Header from "./Containers/Header/Header.jsx";
import MainPage from "./Containers/MainPage/MainPage.jsx";
import "./assets/styles/index.css";

function App() {

  return (
      <HelmetProvider>

              <Header />
          <MainPage />

      </HelmetProvider>
  )
}

export default App
