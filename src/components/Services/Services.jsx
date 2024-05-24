import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/des.png";
import Glasses from "../../img/dev.png";
import Humble from "../../img/3d.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Мен мықты меңгерген</span>
        <span>қызмет түрлері</span>
        <spane>
          Дизайнның нақты түріне қарамастан, олардың барлығы аудитория үшін бірегей,
          <br/>
          функционалды және тартымды нәрсені жасауды мақсат етеді. Дизайн мен үшін
          <br/>
          жай ғана процесс емес, ол менің бар қызығушылығым мен  шабыттандыратын,
          <br/>
          жақсартатын және өзгертетін күшке ие дүние десекте болады.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">РЕЗЮМЕ</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#c68cd3" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, After Effects, Photoshop, Adobe Illustrator"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, PHP/Laravel"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"3D"}
            detail={
              "modelling, rigging and animation"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
