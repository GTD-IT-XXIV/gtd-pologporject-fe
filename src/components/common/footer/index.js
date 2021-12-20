import React from "react";
import { useNavigate } from "react-router-dom";
import FacebookLogo from "./assets/FacebookLogo";
import InstagramLogo from "./assets/InstagramLogo";
import "./style.css";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="Footer">
      <div
        className="GTD"
        onClick={() => {
          navigate("");
        }}
      >
        <div>GTD</div> <div className="Unsolved">UNSOLVED</div>
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
