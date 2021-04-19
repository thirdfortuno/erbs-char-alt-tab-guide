import { LoremIpsum } from "lorem-ipsum";

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

export { spitTips };
