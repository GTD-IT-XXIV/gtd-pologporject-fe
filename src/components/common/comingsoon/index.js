import "./style.css";
import image from "./assets/Thun.gif";

export default function ComingSoon() {
  return (
    <div
      className="ComingSoon"
      style={{ backgroundImage: `url(${image})` }}
      data-aos="zoom-in"
    >
      <div>
        <h1 className="ComingSoonTitle">SOLD OUT</h1>
        <h3 className="ComingSoonText">Thank you and see you next time!</h3>
      </div>
    </div>
  );
}
