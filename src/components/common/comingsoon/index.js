import "./style.css";
import image from "./assets/Thun.gif";

export default function ComingSoon() {
  return (
    <div className="ComingSoon" style={{ backgroundImage: `url(${image})` }}>
      <div>
        <h1 className="ComingSoonTitle">Coming Soon</h1>
        <h3 className="ComingSoonText">See you when it is open!</h3>
      </div>
    </div>
  );
}
