import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const Countdown = ({ date, title, genre, CTAText, image }) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(date).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div
      className="CountdownSection"
      style={{ backgroundImage: `url(${image}` }}
    >
      <div className="GameTitle">{title}</div>
      <div className="GameGenre">{genre}</div>
      <div className="TimeBoxes">
        <div className="TimeBox">
          <div className="TimeValue">{timerDays}</div>
          <div className="TimeUnit">days</div>
        </div>

        <div className="TimeBox">
          <div className="TimeValue">{timerHours}</div>
          <div className="TimeUnit">hours</div>
        </div>

        <div className="TimeBox">
          <div className="TimeValue">{timerMinutes}</div>
          <div className="TimeUnit">minutes</div>
        </div>

        <div className="TimeBox">
          <div className="TimeValue">{timerSeconds}</div>
          <div className="TimeUnit">seconds</div>
        </div>
      </div>
      <a className="CTA-Buy">{CTAText}</a>
    </div>
  );
};

export default Countdown;
