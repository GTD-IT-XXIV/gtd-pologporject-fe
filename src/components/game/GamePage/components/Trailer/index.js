import React from "react";
import YouTube from "react-youtube";
import "./style.css";
const Trailer = () => {
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const opts = {
    height: "500",
    width: "800",
  };
  return (
    <div>
      <div className="GameDetailSection">
        <div className="Details">
          <div className="DetailTitle">Duration</div>
          <div className="DetailDescription">2 hours</div>
        </div>

        <div className="Details">
          <div className="DetailTitle">Difficulty</div>
          <div className="DetailDescriptionRed">•••••</div>
        </div>

        <div className="Details">
          <div className="DetailTitle">Capacity</div>
          <div className="DetailDescription">5-7 person(s)</div>
        </div>
        <div className="TrailerSection">
          <div className="TrailerTitle">
            WATCH THE <span className="TrailerTitleRed">TRAILER</span>
          </div>
          <div className="TrailerVideo">
            return{" "}
            <YouTube videoId="MzznUfFGcOg" opts={opts} onReady={_onReady} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
