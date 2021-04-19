import { LoremIpsum } from "lorem-ipsum";
import { db } from "../../../../../firebase";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 25,
    min: 10,
  },
});

const spitTips = () => {
  let list = [];
  for (var i = 0; i < Math.floor(Math.random() * (5 - 2)) + 2; i++) {
    list.push(lorem.generateSentences(1));
  }
  return list;
};

const fetchTipsFS = async (char) => {
  let tipsGeneral = [];
  let tipsEarly = [];
  let tipsMid = [];
  let tipsLate = [];
  let countersGeneral = [];
  let countersEarly = [];
  let countersMid = [];
  let countersLate = [];
  await db
    .collection("character")
    .doc(char.toLowerCase())
    .get()
    .then((doc) => {
      const data = doc.data();
      if (data.tips !== undefined) {
        data.tips.forEach((tip) => {
          if (tip.type === "tip") {
            switch (tip) {
              case "early":
                tipsEarly.push(tip.data);
                break;
              case "mid":
                tipsMid.push(tip.data);
                break;
              case "late":
                tipsLate.push(tip.data);
                break;
              default:
                tipsGeneral.push(tip.data);
            }
          } else {
            switch (tip) {
              case "early":
                countersEarly.push(tip.data);
                break;
              case "mid":
                countersMid.push(tip.data);
                break;
              case "late":
                countersLate.push(tip.data);
                break;
              default:
                countersGeneral.push(tip.data);
            }
          }
        });
      }
    });
  return {
    tipsGeneral,
    tipsEarly,
    tipsMid,
    tipsLate,
    countersGeneral,
    countersEarly,
    countersMid,
    countersLate,
  };
};

export { spitTips, fetchTipsFS };
