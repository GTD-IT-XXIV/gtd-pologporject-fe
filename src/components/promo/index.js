import { useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router";

export default function Promo(props) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/soldout");
    window.scrollTo({ top: -5000, behavior: "smooth" });
  }, []);
  return (
    <div className="Container" data-aos="zoom-in">
      <div className="TitleContainer">
        <div className="Title">
          Promo<span className="TitleRed">tion</span>
        </div>
        <div className="TitleText">
          PLAY BOTH <span className="TitleTextRedish">THE SACRIFICE</span> AND{" "}
          <span className="TitleTextRedish">MISFORTUNE</span> FOR JUST{" "}
          <span className="TitlTexteDollar">$12</span>
        </div>
        <div className="TitleText">
          ENJOY A CHEAPER PRICE YET TWICE THE FUN!
        </div>
      </div>
      <div className="HowContainer">
        <div className="SubTitle">
          HOW DOES IT <span className="SubTitleRed">WORK?</span>
        </div>
        <ul className="Lists">
          <li>
            Book any slot of The Sacrifice and proceed to make a successful
            payment
          </li>
          <li>
            Book any slot of Misfortune and proceed to make a successful payment
          </li>
          <li>
            Our committee will contact you through your registered mobile number
            to confirm the amount of cashbacks you earned within 1 day after GTD
            Unsolved (30 January 2022)
          </li>
          <li>
            You will receive the cashback via PayAnyone/PayLah to your
            registered mobile number on 30 January 2022.
          </li>
        </ul>
      </div>
      <div className="QualifyContainer">
        <div className="SubTitle">
          TO QUALIFY FOR THIS <span className="SubTitleRed">OFFER</span>
        </div>
        <ul className="Lists">
          <li>
            You need to purchase the slots under the{" "}
            <span className="TextRed">SAME</span> name and contact information
          </li>
          <li>
            The promotion will apply for every pair of The Sacrifice and
            Misfortune tickets purchased
          </li>
          <li>Do note that the order of purchase does not matter.</li>
        </ul>
      </div>
      <div className="ExampleContainer">
        <div className="SubTitle">
          EXAM<span className="SubTitleRed">PLE</span>
        </div>
        <div className="ExampleText">
          A purchase of{" "}
          <span className="ExampleTextRedish">3 The Sacrifice</span> tickets and
          a purchase of <span className="ExampleTextRedish">2 Misfortune</span>{" "}
          tickets will be counted as{" "}
          <span className="ExampleTextRed"> 2 bundles </span>and{" "}
          <span className="ExampleTextRed">1 The Sacrifice</span> ticket.{" "}
        </div>
      </div>
      <div className="TnCContainer">
        <div className="SubTitle">
          TERMS & <span className="SubTitleRed">CONDITIONS</span>
        </div>
        <ul className="Lists">
          <li>Offer is valid from 8 January 2022 until 14 January 2022.</li>
          <li>
            As long as there are slots available, there is no limit to the
            amount of eligible bundle cashback you can earn.
          </li>
          <li>For more information, please contact Leonard at 8435 9366.</li>
        </ul>
      </div>
    </div>
  );
}
