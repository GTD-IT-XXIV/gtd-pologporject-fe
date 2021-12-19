import React, { useState } from "react";

import "./style.css";
import RightArrowWhite from "../../assets/RightArrowWhite";
import RightArrowGray from "../../assets/RightArrowGray";
import LeftArrowWhite from "../../assets/LeftArrowWhite";
import LeftArrowGray from "../../assets/LeftArrowGray";

const Character = ({ pages }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
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
          {pages.map((page, index) => {
            let isActive = parseInt(`${index}`) === activeIndex;
            return (
              <div className={isActive ? "CharacterPage" : "HidePage"}>
                {page.map((character, key) => {
                  return (
                    <div key={key} className="CharacterProfile">
                      <img src={character.image}></img>
                      <div className="CharacterName">{character.name}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}

          {activeIndex !== pages.length - 1 ? (
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
          {pages.map((page, index) => {
            let isActive = parseInt(`${index}`) === activeIndex;
            return (
              <span
                key={index}
                onClick={() => {
                  setActiveIndex(parseInt(`${index}`));
                }}
                className={isActive ? "RedDot" : "GrayDot"}
              >
                •
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
