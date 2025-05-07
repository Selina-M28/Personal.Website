import React from "react";
import imgSrcLinkedin from "../photos/Linkedin.webp";
import imgSrcGithub from "../photos/Github_Logo.png";

function Footer() {
  return (
    <div>
      <nav className="persistent-footer">
        <a href="https://www.linkedin.com/in/selina-mena/">
        <img src={imgSrcLinkedin} alt ="Linkedin" width="30"/>
        </a>
        <a href="https://github.com/Selina-M28">
        <div>
        <img src={imgSrcGithub} alt ="Github" width="30"/>
        </div>
        </a>
      </nav>
    </div>
  );
}

export default Footer;
