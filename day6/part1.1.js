import { zip } from "jsr:@std/collections";

let input = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   + `;
const calculateWork = (arr, operator) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += eval(arr[i].join(operator[0][i]));
  }
  return sum;
};

const parseInput = (input) => {
  return input
    .split("\n")
    .filter((line) => line !== "")
    .map((line) => line.split(" ").filter((x) => x !== ""));
};
const main = () => {
  let parsed = parseInput(input);
  const operator = parsed.slice(parsed.length - 1);
  parsed = parsed.slice(0, parsed.length - 1);
  const transposed = zip(...parsed);

  return calculateWork(transposed, operator);
};
console.log(main());
