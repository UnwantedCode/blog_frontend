import {Helmet} from "react-helmet-async";
import MainPageSlider from "../../Components/MainPageSlider/MainPageSlider.jsx";

//show big image and some text under it
function MainPage() {
    return (
        <>
            <Helmet>
                <title>Strona glówna</title>
            </Helmet>
            <MainPageSlider />
        </>
    );
}

export default MainPage;