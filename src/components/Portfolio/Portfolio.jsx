import React, { useContext } from "react";
import Mers from "../../img/mers.png";
import Almaty from "../../img/almaty.png";
import Dior1 from "../../img/dior1.png";
import Star from "../../img/starbucks1.png";
import Lab11 from "../../img/lab11.png";
import Lab8_10 from "../../img/lab8_10.png";
import Lab9 from "../../img/lab9.png";
import Lab7 from "../../img/lab7.png";
import Lab6 from "../../img/lab6.png";
import Home from "../../img/home.png";
import Kazan from "../../img/kazan.png";
import Kinjal from "../../img/kinjal.png";
import Svetofor from "../../img/svetofor.png";
import Samaurin from "../../img/samaurin.png";
import Profile from "../../img/profile.png";
import Figma from "../../img/figma.png";
import Figma1 from "../../img/figma1.png";
import Laravel from "../../img/laravel.png";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import { themeContext } from "../../Context";

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="portfolio" id="portfolio">
            <span style={{ color: darkMode ? 'white' : '' }}>Соңғы жобалар</span>
            <span>Portfolio</span>

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={Mers} alt="" className="portfolio-image" />
                    <h1>Photoshop</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Almaty} alt="" className="portfolio-image" />
                    <h1>Photoshop</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Dior1} alt="" className="portfolio-image" />
                    <h1>Photoshop</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Star} alt="" className="portfolio-image" />
                    <h1>Photoshop</h1>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Lab11} alt="" className="portfolio-image" />
                    <h1>Front-end(React)</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Lab8_10} alt="" className="portfolio-image" />
                    <h1>Front-end(React)</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Lab9} alt="" className="portfolio-image" />
                    <h1>Front-end(React)</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Lab7} alt="" className="portfolio-image" />
                    <h1>Front-end(React)</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Lab6} alt="" className="portfolio-image" />
                    <h1>Front-end(React)</h1>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Home} alt="" className="portfolio-image" />
                    <h1>3Ds MAX(3d modelling)</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Kazan} alt="" className="portfolio-image" />
                    <h1>3Ds MAX(3d modelling)</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Kinjal} alt="" className="portfolio-image" />
                    <h1>3Ds MAX(3d modelling)</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Svetofor} alt="" className="portfolio-image" />
                    <h1>3Ds MAX(3d modelling)</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Samaurin} alt="" className="portfolio-image" />
                    <h1>3Ds MAX(3d modelling)</h1>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Profile} alt="" className="portfolio-image" />
                    <h1>Front-end(React)</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Figma} alt="" className="portfolio-image" />
                    <h1>Figma(сайттың алдын-ала дизайны)</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Figma1} alt="" className="portfolio-image" />
                    <h1>Figma(сессияға арналған дизайн)</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Laravel} alt="" className="portfolio-image" />
                    <h1>PHP/Laravel</h1>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Portfolio;
