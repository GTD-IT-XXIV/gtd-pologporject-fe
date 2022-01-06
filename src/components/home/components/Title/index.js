import React from "react";
import DownArrow from "../../assets/DownArrow";
import "./style.css";

const Title = ({ onClick }) => {
  return (
    <div className="TitleSection" data-aos="zoom-in" data-aos-duration="1000">
      <div className="TitleSubSection">
        <div className="Title">
          <div className="TitleReady">READY</div>
          <div className="TitleSolve">TO SOLVE THE</div>
          <div className="TitleUnsolved" onClick={onClick}>
            UNSOLVED?
          </div>
        </div>
        <DownArrow onClick={onClick} />
      </div>
    </div>
  );
};

export default Title;
