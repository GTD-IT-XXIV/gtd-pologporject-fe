import React, { useEffect, useRef, useState } from "react";

import Countdown from "./components/Countdown";
import Synopsis from "./components/Synopsis";
import Trailer from "./components/Trailer";
import bear from "./assets/bear.png";
import bear2 from "./assets/bear2.png";
import "./style.css";
import RightArrowWhite from "./assets/RightArrowWhite";
import RightArrowGray from "./assets/RightArrowGray";
import LeftArrowWhite from "./assets/LeftArrowWhite";
import LeftArrowGray from "./assets/LeftArrowGray";

const GamePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
  return (
    <div>
      <Countdown />
      <Trailer />
      <Synopsis />
      <div className="CharacterSection">
        <div className="CharacterTitle">
          THE <span className="CharacterTitleRed">CHARACTER</span>
        </div>
        <div className="Carousel">
          {activeIndex !== 0 ? (
            <LeftArrowWhite
              onClick={() => {
                setActiveIndex(activeIndex - 1);
              }}
            />
          ) : (
            <LeftArrowGray />
          )}
          <div className={activeIndex === 0 ? "CharacterPage" : "HidePage"}>
            <div className="CharacterProfile">
              <img src={bear}></img>
              <div className="CharacterName">PANDA</div>
            </div>

            <div className="CharacterProfile">
              <img src={bear}></img>
              <div className="CharacterName">PANDA</div>
            </div>

            <div className="CharacterProfile">
              <img src={bear}></img>
              <div className="CharacterName">PANDA</div>
            </div>
          </div>

          <div className={activeIndex === 1 ? "CharacterPage" : "HidePage"}>
            <div className="CharacterProfile">
              <img src={bear2}></img>
              <div className="CharacterName">PANDE</div>
            </div>

            <div className="CharacterProfile">
              <img src={bear2}></img>
              <div className="CharacterName">PANDE</div>
            </div>

            <div className="CharacterProfile">
              <img src={bear2}></img>
              <div className="CharacterName">PANDE</div>
            </div>
          </div>

          <div className={activeIndex === 2 ? "CharacterPage" : "HidePage"}>
            <div className="CharacterProfile">
              <img src={bear}></img>
              <div className="CharacterName">PANDO</div>
            </div>

            <div className="CharacterProfile">
              <img src={bear}></img>
              <div className="CharacterName">PANDO</div>
            </div>

            <div className="CharacterProfile">
              <img src={bear}></img>
              <div className="CharacterName">PANDO</div>
            </div>
          </div>

          {activeIndex !== 2 ? (
            <RightArrowWhite
              onClick={() => {
                setActiveIndex(activeIndex + 1);
              }}
            />
          ) : (
            <RightArrowGray />
          )}
        </div>
        <div className="Dots">
          <span className={activeIndex === 0 ? "RedDot" : "GrayDot"}>•</span>
          <span className={activeIndex === 1 ? "RedDot" : "GrayDot"}>•</span>
          <span className={activeIndex === 2 ? "RedDot" : "GrayDot"}>•</span>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
