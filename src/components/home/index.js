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
    window.scrollTo({ top: -5000, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Title onClick={executeScroll} />

      <GameDisplay divRef={myRef} />

      <div className="DetailsSection">
        <div className="DetailsTitle">
          GTD <span className="DetailsTitleRed">UNSOLVED</span>
        </div>
        <div className="DetailsDescription">
          GTD Unsolved is a series of escape room-esque games where you are
          tasked to solve cases and figure out their underlying enigmatic
          stories along the way. Expect brain-teasing puzzles and tantalizing
          mysteries for you and your inquisitive friends and colleagues to
          discover!
        </div>

        <div className="HowToPlayTitle">
          HOW TO <span className="DetailsTitleRed">PLAY</span>
        </div>

        <div className="HowToPlaySection">
          <div className="HowToPlaySubSection">
            <div className="HowToPlayDescription">
              <div className="HowToPlayDescriptionLeft">
                <div className="HowToPlayDescriptionTitle"></div>
                <div className="HowToPlayDescriptionText"></div>
              </div>
              <TicketLogo />
              <div className="HowToPlayDescriptionRight">
                <div className="HowToPlayDescriptionTitle">
                  BOOK YOUR TICKET
                </div>
                <div className="HowToPlayDescriptionText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className="HowToPlayLine" />
          </div>

          <div className="HowToPlaySubSection">
            <div className="HowToPlayDescription">
              <div className="HowToPlayDescriptionLeft">
                <div className="HowToPlayDescriptionTitle">
                  MISSION BRIEFING
                </div>
                <div className="HowToPlayDescriptionText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <PeopleLogo />
              <div className="HowToPlayDescriptionRight">
                <div className="HowToPlayDescriptionTitle"></div>
                <div className="HowToPlayDescriptionText"></div>
              </div>
            </div>
            <div className="HowToPlayLine" />
          </div>

          <div className="HowToPlaySubSection">
            <div className="HowToPlayDescription">
              <div className="HowToPlayDescriptionLeft">
                <div className="HowToPlayDescriptionTitle"></div>
                <div className="HowToPlayDescriptionText"></div>
              </div>
              <MagnifyLogo />
              <div className="HowToPlayDescriptionRight">
                <div className="HowToPlayDescriptionTitle">FIND THE CLUES</div>
                <div className="HowToPlayDescriptionText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className="HowToPlayLine" />
          </div>

          <div className="HowToPlaySubSection">
            <div className="HowToPlayDescription">
              <div className="HowToPlayDescriptionLeft">
                <div className="HowToPlayDescriptionTitle">
                  SOLVE THE PUZZLE
                </div>
                <div className="HowToPlayDescriptionText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <PuzzlePieceWhite />
              <div className="HowToPlayDescriptionRight">
                <div className="HowToPlayDescriptionTitle"></div>
                <div className="HowToPlayDescriptionText"></div>
              </div>
            </div>
            <div className="HowToPlayLine" />
          </div>

          <div className="HowToPlaySubSection">
            <div className="HowToPlayDescription">
              <div className="HowToPlayDescriptionLeft">
                <div className="HowToPlayDescriptionTitle"></div>
                <div className="HowToPlayDescriptionText"></div>
              </div>
              <EscapeLogo />
              <div className="HowToPlayDescriptionRight">
                <div className="HowToPlayDescriptionTitle">ESCAPE!</div>
                <div className="HowToPlayDescriptionText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
