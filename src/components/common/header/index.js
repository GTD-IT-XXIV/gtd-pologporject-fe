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
            <p className="text">
              <span className="old">NOW PLAYING</span>
              <span className="new">PLAY GAMES</span>
            </p>
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
            <div
              onClick={() => {
                navigate("/heist");
              }}
            >
              HEIST
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
            <p className="text">
              <span className="old">BUY TICKETS</span>
              <span className="new">GAME LISTS</span>
            </p>
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
            <div
              onClick={() => {
                navigate("/heist/registration");
              }}
            >
              HEIST
            </div>
          </div>
        </div>
        <div
          className="promo-title"
          onClick={() => {
            navigate("/promotion");
          }}
        >
          <p className="text">
            <span className="old">PROMO</span>
            <span className="new">EXPIRED</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
