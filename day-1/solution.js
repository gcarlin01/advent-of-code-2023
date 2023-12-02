const fs = require("fs");

const document = fs
  .readFileSync(__dirname + "/sample-2", { encoding: "utf8" })
  .split("\n");

function partOne() {
  const docDigits = document
    .map((item) => item.split(""))

    .map((subArray) => subArray.filter((item) => !isNaN(item)));

  const lineValueFinder = docDigits.map((subArray) =>
    Number(subArray[0] + subArray[subArray.length - 1])
  );

  const totalSum = lineValueFinder.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log("part 1", totalSum);
}

// const numberInWords = [
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
// ];

// const convertWordsToNumbers = (word) => {
//   switch (word) {
//     case "one":
//       return 1;
//     case "two":
//       return 2;
//     case "three":
//       return 3;
//     case "four":
//       return 4;
//     case "five":
//       return 5;
//     case "six":
//       return 6;
//     case "seven":
//       return 7;
//     case "eight":
//       return 8;
//     case "nine":
//       return 9;
//     default:
//       return NaN;
//   }
// };

// const wordFinderConverter = (words, string) => {
//   return words.map((word) => {
//     const found = string.includes(word);
//     return { word, found, number: found ? convertWordsToNumbers(word) : NaN };
//   });
// };

// const results = document.map((subArray) => {
//   const foundAndConvertedWords = wordFinderConverter(numberInWords, subArray);
//   return { subArray, foundAndConvertedWords };
// });

// console.log(results);
