import {Helmet} from "react-helmet-async";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './MainPageSlider.module.css';
//show big image and some text under it
function MainPageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // centerMode: true,
    };

    return (
        <>
            <div className={styles.sliderContainer}>
                <Slider {...settings}>
                    <div className={styles.slide}>
                        <img src="https://www.google.com/search/static/gs/animal/cover_images/m01yrx_cover.png" alt="Slide 1"/>
                        <div className={styles.caption}>
                            <h2>We Created This Awesome Free WordPress Theme To Set New Industry Standard</h2>
                            <p>Welcome to WordPress. This is your first post. Edit or delete it, then start
                                blogging!</p>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5fL13V1uHWmZVs3wkTlfsWUet8ZKw_G5cCcl7pxtXA&s" alt="Slide 2"/>
                        <div className={styles.caption}>
                            <h2>Another Slide Title</h2>
                            <p>Some description for the second slide.</p>
                        </div>
                    </div>
                    {/* Dodaj więcej slajdów w razie potrzeby */}
                </Slider>
            </div>
        </>
    );
}

export default MainPageSlider;