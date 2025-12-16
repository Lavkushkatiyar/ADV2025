const input = Deno.readTextFileSync("part1.txt");

const joulEnergy = (arr) => {
  let first = 0;
  let second = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > second) second = arr[i];
    if (i < arr.length - 1 && arr[i] > first) {
      first = arr[i];
      second = 0;
    }
  }
  return parseInt(first + second);
};
const countJoules = (input) => {
  const inputs = input.split("\n");
  let sumOfJoules = 0;
  for (const x of inputs) {
    sumOfJoules += joulEnergy([...x]);
  }
  return sumOfJoules;
};
console.log(countJoules(input));
