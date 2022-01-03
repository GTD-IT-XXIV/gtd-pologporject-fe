import React, { useEffect, useRef } from "react";
import EscapeLogo from "./assets/EscapeLogo";
import MagnifyLogo from "./assets/MagnifyLogo";
import PeopleLogo from "./assets/PeopleLogo";

import PuzzlePieceWhite from "./assets/PuzzlePieceWhite";
import TicketLogo from "./assets/TicketLogo";
import GameDisplay from "./components/GameDisplay";
import Title from "./components/Title";
import "./style.css";
const Home = () => {
  const myRef = useRef(null);

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    window.scrollTo({ top: -10000, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Title onClick={executeScroll} />

      <GameDisplay divRef={myRef} />

      <div className="DetailsSection">
        <div className="DetailsTitle">
          GTD <span className="DetailsTitleRed">UNSOLVED</span>
        </div>
        <div
          className="DetailsDescription"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          GTD Unsolved is a series of mind-bending, story-driven, and
          character-rich games, presented by the Project Officer and Logistics
          team. Consisting of Escape Room, Case File, and Heist games, you will
          be tasked to delve and discover the connection between the storyline
          and gameplay. Enjoy these handcrafted puzzles and mechanics which are
          made for you and your friends.
        </div>

        <div className="HowToPlayTitle">
          HOW TO <span className="DetailsTitleRed">PLAY</span>
        </div>

        <div className="HowToPlaySection">
          <div className="HowToPlaySubSection">
            <div className="HowToPlayDescriptionOnRight">
              <div className="HowToPlayDescriptionLeft">
                <div className="HowToPlayDescriptionTitle"></div>
                <div className="HowToPlayDescriptionText"></div>
              </div>
              <TicketLogo />
              <div className="HowToPlayDescriptionRight">
                <div className="HowToPlayDescriptionTitle" data-aos="fade-up">
                  BOOK YOUR TICKET
                </div>
              </div>
            </div>
          </div>
          <div className="HowToPlaySubSectionLine">
            <div className="HowToPlayLine"></div>
          </div>
          <div className="HowToPlaySubSection">
            <div className="HowToPlayDescriptionOnLeft">
              <div className="HowToPlayDescriptionLeft">
                <div className="HowToPlayDescriptionTitle" data-aos="fade-up">
                  MISSION BRIEFING
                </div>
              </div>
              <PeopleLogo />
              <div className="HowToPlayDescriptionRight">
                <div className="HowToPlayDescriptionTitle"></div>
                <div className="HowToPlayDescriptionText"></div>
              </div>
            </div>
          </div>
          <div className="HowToPlaySubSectionLine">
            <div className="HowToPlayLine" />
          </div>
          <div className="HowToPlaySubSection">
            <div className="HowToPlayDescriptionOnRight">
              <div className="HowToPlayDescriptionLeft">
                <div className="HowToPlayDescriptionTitle"></div>
                <div className="HowToPlayDescriptionText"></div>
              </div>
              <MagnifyLogo />
              <div className="HowToPlayDescriptionRight">
                <div className="HowToPlayDescriptionTitle" data-aos="fade-up">
                  FIND THE CLUES
                </div>
              </div>
            </div>
          </div>
          <div className="HowToPlaySubSectionLine">
            <div className="HowToPlayLine" />
          </div>
          <div className="HowToPlaySubSection">
            <div className="HowToPlayDescriptionOnLeft">
              <div className="HowToPlayDescriptionLeft">
                <div className="HowToPlayDescriptionTitle" data-aos="fade-up">
                  SOLVE THE PUZZLE
                </div>
              </div>
              <PuzzlePieceWhite />
              <div className="HowToPlayDescriptionRight">
                <div className="HowToPlayDescriptionTitle"></div>
                <div className="HowToPlayDescriptionText"></div>
              </div>
            </div>
          </div>
          <div className="HowToPlaySubSectionLine">
            <div className="HowToPlayLine" />
          </div>
          <div className="HowToPlaySubSection">
            <div className="HowToPlayDescriptionOnRight">
              <div className="HowToPlayDescriptionLeft">
                <div className="HowToPlayDescriptionTitle"></div>
                <div className="HowToPlayDescriptionText"></div>
              </div>
              <EscapeLogo />
              <div className="HowToPlayDescriptionRight">
                <div className="HowToPlayDescriptionTitle" data-aos="fade-up">
                  ESCAPE!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
