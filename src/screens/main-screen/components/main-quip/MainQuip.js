import React from "react";

const MainQuip = (props) => {
  return props.char !== null ? (
    <h1>{`${props.quip[0]}${props.char}${props.quip[1]}`}</h1>
  ) : (
    <h1>Please select a character!</h1>
  );
};

export default MainQuip;
