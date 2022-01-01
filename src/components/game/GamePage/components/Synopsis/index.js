import React from "react";
import "./style.css";
const Synopsis = ({ synopsis }) => {
  return (
    <div className="SynopsisSection">
      <div className="SynopsisTitle">
        THE <span className="SynopsisTitleRed">SYNOPSIS</span>
      </div>
      <div className="SynopsisText" data-aos="zoom-in">
        {synopsis}
      </div>
    </div>
  );
};

export default Synopsis;
