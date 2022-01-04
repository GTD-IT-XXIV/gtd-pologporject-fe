import React from "react";
import image from "../../../../common/comingsoon/assets/Thun.gif";
import "./style.css";
import "../../../../common/comingsoon/style.css";
const Trailer = ({ duration, difficulty, capacity, videoId }) => {
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
      <div className="GameDetailSection" data-aos="fade-up">
        <div className="Details">
          <div className="DetailTitle">Duration</div>
          <div className="DetailDescription">{duration}</div>
        </div>

        <div className="Details">
          <div className="DetailTitle">Difficulty</div>
          <div className="DetailDescriptionRed">
            {difficulty}
            <span className="DetailDescriptionGray">•</span>
          </div>
        </div>

        <div className="Details">
          <div className="DetailTitle">Capacity</div>
          <div className="DetailDescription">{capacity}</div>
        </div>
        <div className="TrailerSection">
          <div className="TrailerTitle">
            WATCH THE <span className="TrailerTitleRed">TRAILER</span>
          </div>
          <div className="TrailerVideoDiv">
            {videoId === "comingsoon" ? (
              <div
                className="ComingSoonSection"
                style={{ backgroundImage: `url(${image})` }}
                data-aos="zoom-in"
              >
                <h1 className="ComingSoonTitle">Coming Soon</h1>
              </div>
            ) : (
              <iframe
                className="TrailerVideo"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
