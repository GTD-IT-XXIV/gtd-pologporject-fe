import React from "react";
import DownArrow from "../../assets/DownArrow";
import "./style.css";

const Title = ({ onClick }) => {
  return (
    <div className="TitleSection">
      <div className="TitleSubSection">
        <div className="Title">
          <div className="TitleReady">READY</div>
          <div className="TitleSolve">TO SOLVE THE</div>
          <div className="TitleUnsolved">UNSOLVED?</div>
        </div>
        <DownArrow onClick={onClick} />
      </div>
    </div>
  );
};

export default Title;
