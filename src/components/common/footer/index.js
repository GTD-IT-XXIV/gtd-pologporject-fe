import React from "react";
import FacebookLogo from "./assets/FacebookLogo";
import InstagramLogo from "./assets/InstagramLogo";
import "./style.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div
        className="GTD"
        onClick={() => {
          window.scrollTo({ top: -10000, behavior: "smooth" });
        }}
      >
        <div>
          GTD <span className="Unsolved"> UNSOLVED</span>
        </div>
      </div>
      <div className="Copyright">
        <div>Copyright © 2022 GTD XXIV</div>
        <div>All Rights Reserved.</div>
      </div>
      <div className="Logos">
        <InstagramLogo />
        <FacebookLogo />
      </div>
    </div>
  );
};

export default Footer;
