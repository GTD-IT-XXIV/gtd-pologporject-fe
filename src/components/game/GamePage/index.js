import React, { useEffect, useRef, useState } from "react";
import Character from "./components/Character";

import Countdown from "./components/Countdown";
import Synopsis from "./components/Synopsis";
import Trailer from "./components/Trailer";

const GamePage = (props) => {
  useEffect(() => {
    window.scrollTo({ top: -5000, behavior: "smooth" });
  }, []);

  const RenderComponent = (prop) => {
    switch (prop) {
      case "CountdownProps":
        return <Countdown {...props[`${prop}`]} />;
      case "TrailerProps":
        return <Trailer {...props[`${prop}`]} />;
      case "SynopsisProps":
        return <Synopsis {...props[`${prop}`]} />;
      case "CharacterProps":
        return <Character {...props[`${prop}`]} />;
    }
  };

  const RenderComponents = (props) => {
    return Object.keys(props).map((prop, index) => {
      return <div key={index}>{RenderComponent(prop)}</div>;
    });
  };

  return <div>{RenderComponents(props)}</div>;
};

export default GamePage;
