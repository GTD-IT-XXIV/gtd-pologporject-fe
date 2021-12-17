import React from "react";
import FacebookLogo from "./assets/FacebookLogo";
import InstagramLogo from "./assets/InstagramLogo";
import "./style.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="GTD">
        GTD <span className="Unsolved">UNSOLVED</span>
      </div>
      <div className="Copyright">
        Copyright © 2022 GTD XXIV. All Rights Reserved.
      </div>
      <div className="Logos">
        <InstagramLogo />
        <FacebookLogo />
      </div>
    </div>
  );
};

export default Footer;
