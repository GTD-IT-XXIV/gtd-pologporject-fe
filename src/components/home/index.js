import React, { useRef } from "react";
import GameDisplay from "./components/GameDisplay";
import Title from "./components/Title";

const Home = () => {
  const myRef = useRef(null);

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <Title onClick={executeScroll} />

      <GameDisplay divRef={myRef} />
    </div>
  );
};

export default Home;
