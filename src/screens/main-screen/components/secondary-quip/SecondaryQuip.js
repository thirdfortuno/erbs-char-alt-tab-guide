import React from "react";

const SecondaryQuip = (props) => {
  return (
    <h1>{`${props.quip[0]}${props.char ?? "SELECT CHAR"}${props.quip[1]}`}</h1>
  );
};

export default SecondaryQuip;
