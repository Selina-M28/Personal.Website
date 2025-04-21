import React from "react";
import imgSrcLinkedin from "../photos/Linkedin.webp";
import imgSrcGithub from "../photos/Github_Logo.png";

function Footer() {
  return (
    <div>
      <nav className="persistent-footer">
        <a href="https://www.linkedin.com/in/selina-mena/">
        <img src={imgSrcLinkedin} alt ="Linkedin" width="50"/>
        </a>
        <a href="https://github.com/Selina-M28">
        <div style={{ 
          backgroundColor:'white',
          border:'1px solid black',
          borderRadius: '8px'}}>
        <img src={imgSrcGithub} alt ="Github" width="50"/>
        </div>
        </a>
      </nav>
    </div>
  );
}

export default Footer;
