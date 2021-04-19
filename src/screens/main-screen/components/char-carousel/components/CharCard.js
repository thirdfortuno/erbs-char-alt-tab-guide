import React from "react";

import "./CharCard.css";

const CharCard = (props) => {
  const clicked = () => {
    props.handleChoice(props.alt);
  };

  return (
    <input
      className="char-card__image"
      type="image"
      src={props.src}
      alt={props.alt}
      onClick={clicked}
    ></input>
  );
};

export default CharCard;
