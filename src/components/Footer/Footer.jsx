import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: "100%" }} />
            <div className="f-content">
                <a href="mailto:gubaidullinaaigerim695@gmail.com" className="email-link">
                    gubaidullinaaigerim695@gmail.com
                </a>
                <div className="f-icons">
                    <a href="https://www.instagram.com/invites/contact/?igsh=pg6lfmkbfw54&utm_content=6rzavzb" target="_blank"
                       rel="noopener noreferrer">
                        <Insta color="white" size={"3rem"} />
                    </a>
                    <a href="https://www.linkedin.com/in/aigerim-gubaidullina-700298257" target="_blank" rel="noopener noreferrer">
                        <Linkedin color="white" size={"3rem"} />
                    </a>
                    <a href="https://github.com/aigerim2406" target="_blank" rel="noopener noreferrer">
                        <Gitub color="white" size={"3rem"} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
