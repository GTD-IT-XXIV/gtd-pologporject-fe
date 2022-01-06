import { useEffect } from "react";
import "./style.css";

export default function Promo(props) {
  useEffect(() => {
    window.scrollTo({ top: -5000, behavior: "smooth" });
  }, []);
  return (
    <div className="Container" data-aos="zoom-in">
      <div className="Title">
        Promo<span className="TitleRed">tion</span>
      </div>
    </div>
  );
}
