import React from "react";
import "./style.css";
import Poster from "../../assets/escaperoom.jpg";
import Poster2 from "../../assets/casefile.jpg";
import Poster3 from "../../assets/heist.jpg";
import DollarSign from "../../assets/DollarSign";
import PuzzlePiece from "../../assets/PuzzlePiece";
import Suitcase from "../../assets/Suitcase";
import { useNavigate } from "react-router-dom";
const GameDisplay = ({ divRef }) => {
  const navigate = useNavigate();

  return (
    <div
      className="GamesDisplaySection"
      ref={divRef}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className="GamesDisplay"
        onClick={() => {
          navigate("escaperoom");
        }}
      >
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

      <div
        className="GamesDisplay"
        onClick={() => {
          navigate("casefile");
        }}
      >
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

      <div
        className="GamesDisplay"
        onClick={() => {
          navigate("heist");
        }}
      >
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
