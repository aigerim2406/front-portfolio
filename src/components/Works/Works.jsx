import React, { useContext } from "react";
import "./Works.css";
import Narxoz from "../../img/narxoz.png";
import Dansai from "../../img/dansai.png";
import Starbucks from "../../img/starbucks.png";
import Dior from "../../img/dior.png";
import Mersedes from "../../img/mersedes.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
      <div className="works" id="works">
        <div className="w-left">
          <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
            Шабытпен жасалған
            <br/>
            жұмыс орындары
          </span>
            <span>Оқу орындары</span>
            <spane>
              Менің бар қызығушылығым мен шабыттандыратын жұмысым,
              <br />
              тартымды нәрсені жасауды мақсат ететін,
              <br />
              өзгертетін күшке ие дүние
              <br />
              ол дизайн саласы.
            </spane>
            <div
                className="blur s-blur1"
                style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        <div className="w-right">
          <motion.div
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3.5, type: "spring" }}
              className="w-mainCircle"
          >
            <div className="w-secCircle">
              <img src={Narxoz} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Dansai} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Starbucks} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Dior} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Mersedes} alt="" />
            </div>
          </motion.div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
  );
};

export default Works;
