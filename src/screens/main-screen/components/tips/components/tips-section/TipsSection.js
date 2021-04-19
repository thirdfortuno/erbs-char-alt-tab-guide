import React from "react";

import "./TipsSection.css";

const TipsSection = (props) => {
  return (
    <>
      <h3 className="tips-section__header">{props.header}</h3>
      <ul>
        {props.tipList.length > 0 ? (
          props.tipList.map((tip) => (
            <li className="tips-section__tip">{tip}</li>
          ))
        ) : (
          <p>REMIND ME TO ADD TIPS</p>
        )}
      </ul>
    </>
  );
};

export default TipsSection;
