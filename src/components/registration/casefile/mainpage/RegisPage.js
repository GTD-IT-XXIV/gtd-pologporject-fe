import "./RegisPagestyle.css";
import bgImage from "../../../game/casefile/assets/image.gif";
import "../../../home/components/GameDisplay/style.css";
import Poster from "../../../home/assets/escaperoom.jpg";
import Poster2 from "../../../home/assets/casefile.jpg";
import Poster3 from "../../../home/assets/heist.jpg";
import DollarSign from "../../../home/assets/DollarSign";
import PuzzlePiece from "../../../home/assets/PuzzlePiece";
import Suitcase from "../../../home/assets/Suitcase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const RegisPage = (props) => {
  const { handleClick } = props;
  const { data } = props;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: -10000, behavior: "smooth" });
  }, []);
  return (
    <div className="regispage_container">
      <div
        className="pic"
        style={{ backgroundImage: `url(${bgImage})` }}
        data-aos="zoom-in"
      >
        <div className="pic-text">
          <div className="monte">misfortune</div>
          <div className="horror">MYSTERY</div>
        </div>
      </div>
      <div className="info" data-aos="fade-up">
        <div className="buy_tickets">
          BUY <span className="buy_tickets_tickets">TICKETS</span>
        </div>
        <div className="Date">
          <div className="bolted_text">Date</div>
          <div className="non_bolted_text">15 January 2022</div>
        </div>
        <div className="Duration">
          <div className="bolted_text">Duration</div>
          <div className="non_bolted_text">2 hours</div>
        </div>
        <div className="Price">
          <div className="bolted_text">Price</div>
          <div className="non_bolted_text">Individual: $6.5/Person</div>
        </div>
      </div>
      <div className="timeslot" data-aos="zoom-in" data-aos-duration="1250">
        <div className="choose">
          CHOOSE YOUR <span className="timeslots">TIMESLOTS</span>
        </div>
        <div className="buttons">
          {data.map((slots) => {
            if (slots.availableSlots === 0) {
              return (
                <div className="disabledbutton">
                  <div className="books">
                    <div className="booksText">{slots.timeSlot}</div>
                  </div>
                  <div className="disabledslots">
                    <div className="slotsNumber">{slots.availableSlots}</div>
                    <div className="slotsLeft">SLOTS LEFT</div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="button" onClick={() => handleClick(slots)}>
                  <div className="books">
                    <div className="booksText">{slots.timeSlot}</div>
                  </div>
                  <div className="slots">
                    <div className="slotsNumber">{slots.availableSlots}</div>
                    <div className="slotsLeft">SLOTS LEFT</div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div>
        <div className="upcoming">
          CHECK OUT <span>OTHER GAMES</span>
        </div>
        <div
          className="GamesDisplaySectionRegis"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div
            className="GamesDisplay"
            onClick={() => {
              navigate("/escaperoom");
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
              navigate("/heist");
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
      </div>
    </div>
  );
};

export default RegisPage;
