import React from "react";
import eyes from "../../../../assets/eyes/index";
import { spitTips } from "./tools/tipHandler";

import "./Tips.css";
import TipsSection from "./components/tips-section/TipsSection";

const Tips = (props) => {
  return (
    <div className="tips">
      <div className="tips__header">
        <h1>{props.mainChar}</h1>
        <img
          className="tips__header-image"
          src={eyes[props.mainChar.replace(/\s+/g, "")]}
          alt=""
        />
      </div>
      <h2>Tips</h2>
      <TipsSection header="General" tipList={spitTips()} />
      <TipsSection header="Early Game" tipList={spitTips()} />
      <TipsSection header="Mid Game" tipList={spitTips()} />
      <TipsSection header="Late Game" tipList={spitTips()} />
      <h2>Counters</h2>
      <TipsSection header="General" tipList={spitTips()} />
      <TipsSection header="Early Game" tipList={spitTips()} />
      <TipsSection header="Mid Game" tipList={spitTips()} />
      <TipsSection header="Late Game" tipList={spitTips()} />
    </div>
  );
};

export default Tips;
