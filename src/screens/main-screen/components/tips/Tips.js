import React, { useEffect, useState } from "react";
import eyes from "../../../../assets/eyes/index";
import { fetchTipsFS } from "./tools/TipHandler";

import "./Tips.css";
import TipsSection from "./components/tips-section/TipsSection";

const Tips = (props) => {
  const [tipsGeneral, setTipsGeneral] = useState([]);
  const [tipsEarly, setTipsEarly] = useState([]);
  const [tipsMid, setTipsMid] = useState([]);
  const [tipsLate, setTipsLate] = useState([]);
  const [countersGeneral, setCountersGeneral] = useState([]);
  const [countersEarly, setCountersEarly] = useState([]);
  const [countersMid, setCountersMid] = useState([]);
  const [countersLate, setCountersLate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchTipsFS(props.mainChar).then(
      ({
        tipsGeneral: a,
        tipsEarly: b,
        tipsMid: c,
        tipsLate: d,
        countersGeneral: e,
        countersEarly: f,
        countersMid: g,
        countersLate: h,
      }) => {
        setTipsGeneral(a);
        setTipsEarly(b);
        setTipsMid(c);
        setTipsLate(d);
        setCountersGeneral(e);
        setCountersEarly(f);
        setCountersMid(g);
        setCountersLate(h);
      }
    );
    setLoading(false);
  }, [setLoading, props.mainChar]);

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
      {loading ? (
        <></>
      ) : (
        <>
          <h2>Tips</h2>
          {tipsGeneral.length > 0 ? (
            <TipsSection header="General" tipList={tipsGeneral} />
          ) : (
            <></>
          )}
          {tipsEarly.length > 0 ? (
            <TipsSection header="Early Game" tipList={tipsEarly} />
          ) : (
            <></>
          )}
          {tipsEarly.Mid > 0 ? (
            <TipsSection header="Mid Game" tipList={tipsMid} />
          ) : (
            <></>
          )}
          {tipsLate.length > 0 ? (
            <TipsSection header="Late Game" tipList={tipsLate} />
          ) : (
            <></>
          )}
          <h2>Counters</h2>
          {countersGeneral.length > 0 ? (
            <TipsSection header="General" tipList={countersGeneral} />
          ) : (
            <></>
          )}
          {countersEarly.length > 0 ? (
            <TipsSection header="Early Game" tipList={countersEarly} />
          ) : (
            <></>
          )}
          {countersMid.length > 0 ? (
            <TipsSection header="Mid Game" tipList={countersMid} />
          ) : (
            <></>
          )}
          {countersLate.length > 0 ? (
            <TipsSection header="Late Game" tipList={countersLate} />
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default Tips;
