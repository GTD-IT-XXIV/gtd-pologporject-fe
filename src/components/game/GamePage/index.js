import React, { useEffect, useRef, useState } from "react";

import YouTube from "react-youtube";
import Countdown from "./components/Countdown";
import Trailer from "./components/Trailer";
import "./style.css";
const GamePage = () => {
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const opts = {
    height: "500",
    width: "800",
  };
  return (
    <div>
      <Countdown />
      <Trailer />
    </div>
  );
};

export default GamePage;
