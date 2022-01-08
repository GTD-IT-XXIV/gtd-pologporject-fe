import React from "react";
import "./style.css";
import ReactHtmlParser from "react-html-parser";
const Synopsis = ({ synopsis }) => {
  return (
    <div className="SynopsisSection">
      <div className="SynopsisTitle">
        THE <span className="SynopsisTitleRed">SYNOPSIS</span>
      </div>
      <div className="SynopsisText" data-aos="zoom-in">
        {ReactHtmlParser(synopsis)}
      </div>
    </div>
  );
};

export default Synopsis;
