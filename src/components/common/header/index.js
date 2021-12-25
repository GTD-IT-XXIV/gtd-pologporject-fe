import "./style.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="all">
      <div className="headers">
        <div
          className="home-title"
          onClick={() => {
            navigate("");
          }}
        >
          HOME
        </div>
        <div className="now-playing">
          <div className="now-playing-title">NOW PLAYING</div>
          <div className="dropdown">
            <div
              onClick={() => {
                navigate("casefile");
              }}
            >
              ESCAPE ROOM
            </div>
            <div
              onClick={() => {
                navigate("escaperoom");
              }}
            >
              CASE FILE
            </div>
          </div>
        </div>
        <div
          className="gtd-unsolved-title"
          onClick={() => {
            navigate("");
          }}
        >
          <div>
            GTD <span>UNSOLVED</span>
          </div>
        </div>
        <div className="buy-tickets">
          <div className="buy-tickets-title">BUY TICKETS</div>
          <div className="buy-tickets-dropdown">
            <div
              onClick={() => {
                navigate("escaperoom/registration");
              }}
            >
              ESCAPE ROOM
            </div>
            <div
              onClick={() => {
                navigate("casefile/registration");
              }}
            >
              CASE FILE
            </div>
            <div
              onClick={() => {
                navigate("heist/registration");
              }}
            >
              HEIST
            </div>
          </div>
        </div>
        <div
          className="promo-title"
          onClick={() => {
            navigate("promo");
          }}
        >
          PROMO
        </div>
      </div>
    </div>
  );
};

export default Header;
