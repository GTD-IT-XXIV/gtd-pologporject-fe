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
            navigate("/");
            window.scrollTo({ top: -10000, behavior: "smooth" });
          }}
        >
          <p className="text">HOME</p>
        </div>
        <div className="now-playing">
          <div className="now-playing-title">
            <p className="text">NOW PLAYING</p>
          </div>
          <div className="dropdown">
            <div
              onClick={() => {
                navigate("/escaperoom");
              }}
            >
              THE SACRIFICE
            </div>
            <div
              onClick={() => {
                navigate("/casefile");
              }}
            >
              MISFORTUNE
            </div>
          </div>
        </div>
        <div
          className="gtd-unsolved-title"
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: -10000, behavior: "smooth" });
          }}
        >
          <div>
            GTD <span>UNSOLVED</span>
          </div>
        </div>
        <div className="buy-tickets">
          <div className="buy-tickets-title">
            <p className="text">BUY TICKETS</p>
          </div>
          <div className="buy-tickets-dropdown">
            <div
              onClick={() => {
                navigate("/escaperoom/registration");
              }}
            >
              THE SACRIFICE
            </div>
            <div
              onClick={() => {
                navigate("/casefile/registration");
              }}
            >
              MISFORTUNE
            </div>
          </div>
        </div>
        <div
          className="promo-title"
          onClick={() => {
            navigate("/heist");
          }}
        >
          <p className="text">UPCOMING</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
