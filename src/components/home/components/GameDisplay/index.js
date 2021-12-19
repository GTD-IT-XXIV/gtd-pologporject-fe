import React from "react";
import "./style.css";
import Poster from "../../assets/Poster.png";
import Poster2 from "../../assets/Poster1.png";
import Poster3 from "../../assets/Poster2.png";
import DollarSign from "../../assets/DollarSign";
import PuzzlePiece from "../../assets/PuzzlePiece";
import Suitcase from "../../assets/Suitcase";

const GameDisplay = ({ divRef }) => {
  return (
    <div className="GamesDisplaySection" ref={divRef}>
      <div className="GamesDisplay">
        <div
          className="GamesImage"
          style={{ backgroundImage: `url(${Poster})` }}
        >
          <div className="GamesImageOverlay">
            <PuzzlePiece />
            <div className="GamesButton">PLAY</div>
          </div>
        </div>
        <div className="GamesDate">15 January</div>
      </div>

      <div className="GamesDisplay">
        <div
          className="GamesImage"
          style={{ backgroundImage: `url(${Poster2})` }}
        >
          <div className="GamesImageOverlay">
            <Suitcase />
            <div className="GamesButton">PLAY</div>
          </div>
        </div>
        <div className="GamesDate">15 January</div>
      </div>

      <div className="GamesDisplay">
        <div
          className="GamesImage"
          style={{ backgroundImage: `url(${Poster3})` }}
        >
          <div className="GamesImageOverlay">
            <DollarSign />
            <div className="GamesButton">PLAY</div>
          </div>
        </div>
        <div className="GamesDate">29 January</div>
      </div>
    </div>
  );
};

export default GameDisplay;
