import React, { useEffect, useRef, useState } from "react";

import Countdown from "./components/Countdown";
import Synopsis from "./components/Synopsis";
import Trailer from "./components/Trailer";
import "./style.css";
const GamePage = () => {
  return (
    <div>
      <Countdown />
      <Trailer />
      <Synopsis />
    </div>
  );
};

export default GamePage;
