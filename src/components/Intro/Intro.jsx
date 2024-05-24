import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import gaba from "../../img/gaba.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Intro = () => {
    const transition = { duration: 2, type: "spring" };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="Intro" id="Intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }}>Сәлем! Менің аты-жөнім</span>
                    <span>Губайдуллина Айгерим</span>
                    <span>
            Мен Нархоз университетнің 3 курс студентімін. IT мамандығының Digital management and design бөлімінде оқимын.
            Осы 3 жыл оқу аралығында көптеген қабілеттерді жинақтадым. Олар: 3d modelling, After Effects, Adobe Illustrator,
            Substance 3d Pointer, Web-design, PHP Laravel.
            Сапалы жұмысты қамтамасыз ететін веб-дизайн, дизайн және код жазу бойынша орташа тәжірибесі бар маманмын.
          </span>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <div className="gaba-container">
                    <img src={gaba} alt="" className="gaba-image" />
                </div>

                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatinDiv img={crown} text1="3D" text2="Modelling" />
                </motion.div>

                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatinDiv img={thumbup} text1="UX/UI" text2="Designer" />
                </motion.div>

                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#eac4c4",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Intro;
