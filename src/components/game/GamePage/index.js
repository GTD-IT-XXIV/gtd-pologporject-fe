import React, { useEffect, useRef, useState } from "react";
import Character from "./components/Character";

import Countdown from "./components/Countdown";
import Synopsis from "./components/Synopsis";
import Trailer from "./components/Trailer";

const GamePage = ({
  CountdownProps,
  TrailerProps,
  SynopsisProps,
  CharacterProps,
}) => {
  console.log(CountdownProps);
  return (
    <div>
      <Countdown {...CountdownProps} />
      <Trailer {...TrailerProps} />
      <Synopsis {...SynopsisProps} />
      <Character {...CharacterProps} />
    </div>
  );
};

export default GamePage;
