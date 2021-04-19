import React from "react";
import CharCard from "./components/CharCard";

import { names } from "../../../../strings/CharList";
import minis from "../../../../assets/minis/index";

import "./CharCarousel.css";

const CharCarousel = (props) => {
  const handleChoice = (charChoice) => {
    props.selectChar(charChoice);
  };

  return (
    <div className="char-carousel">
      {names.map((char) => {
        return (
          <CharCard
            src={minis[char.replace(/\s+/g, "")]}
            alt={char}
            handleChoice={handleChoice}
          ></CharCard>
        );
      })}
    </div>
  );
};

export default CharCarousel;
