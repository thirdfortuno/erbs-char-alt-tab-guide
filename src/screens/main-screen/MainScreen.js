import React, { useEffect, useState } from "react";
import CharCarousel from "./components/char-carousel/CharCarousel";
import Tips from "./components/tips/Tips";
import MainQuip from "./components/main-quip/MainQuip";
import { mainQuips } from "../../strings/Quips";
import { names } from "../../strings/CharList";
import Credits from "./components/credits/Credits";

import "./MainScreen.css";

const MainScreen = () => {
  const [mainChar, setMainChar] = useState(null);
  const [mainQuip, setMainQuip] = useState(["", ""]);

  const selectMainChar = (char) => {
    setMainChar(char);
  };

  const charExists = (char) => {
    if (names.indexOf(char) > -1) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    setMainQuip(mainQuips[Math.floor(Math.random() * mainQuips.length)]);
  }, []);

  return (
    <div className="main-screen">
      <div>v.0.30.0</div>
      <MainQuip char={mainChar} quip={mainQuip} />
      <CharCarousel selectChar={selectMainChar} />
      {charExists(mainChar) ? <Tips mainChar={mainChar}></Tips> : <></>}
      <Credits />
    </div>
  );
};

export default MainScreen;
