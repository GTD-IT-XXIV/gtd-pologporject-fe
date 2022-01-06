import React from "react";
import image from "../../../../common/comingsoon/assets/Thun.gif";
import "./style.css";
import "../../../../common/comingsoon/style.css";
const Trailer = ({ duration, difficulty, capacity, videoId }) => {
  return (
    <div>
      <div className="GameDetailSection">
        <div className="Details" data-aos="fade-up">
          <div className="DetailTitle">Duration</div>
          <div className="DetailDescription">{duration}</div>
        </div>

        <div className="Details" data-aos="fade-up">
          <div className="DetailTitle">Difficulty</div>
          <div className="DetailDescriptionRed">
            {difficulty}
            <span className="DetailDescriptionGray">•</span>
          </div>
        </div>

        <div className="Details" data-aos="fade-up">
          <div className="DetailTitle">Capacity</div>
          <div className="DetailDescription">{capacity}</div>
        </div>
        <div className="TrailerSection">
          <div className="TrailerTitle">
            WATCH THE <span className="TrailerTitleRed">TRAILER</span>
          </div>
          <div className="TrailerVideoDiv" data-aos="fade-up">
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
