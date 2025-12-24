import { zip } from "jsr:@std/collections";
let input = Deno.readTextFileSync("day6.txt");
const calculate = (array, operator) => {
  let finalSum = 0;
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    console.log(array[i].join(operator[i]));
    finalSum += eval(array[i].join(operator[i]));
  }
  return finalSum;
};

const calculateTheWork = (parsed, operator) => {
  const outerArray = [];
  let innerArray = [];
  for (let i = 0; i < parsed[0].length; i++) {
    let sum = "";
    for (let j = 0; j < parsed.length; j++) {
      sum += (parsed[j][i] === " ") ? "" : parsed[j][i];
    }
    innerArray.push(sum);
    if (sum === "") {
      outerArray.push(innerArray.slice(0, innerArray.length - 1));
      innerArray = [];
    }
  }
  if (innerArray.length > 0) outerArray.push(innerArray);
  return calculate(outerArray, operator);
};

const parseInput = (input) => input.split("\n");

const main = (input) => {
  let parsed = parseInput(input);
  const operator = parsed.slice(parsed.length - 1);
  parsed = parsed.slice(0, parsed.length - 1);
  return calculateTheWork(
    parsed,
    operator.join(",").split(" ").filter((x) => x !== ""),
  );
};
console.log(main(input));
