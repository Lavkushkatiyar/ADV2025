// const input = Deno.readTextFileSync("part1.txt");
const comapreLast12 = (battrey, arr) => {
  let somearray = battrey;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > somearray[i]) {
      somearray = somearray.slice(0, i);
      for (let j = i; j < arr.length; j++) somearray.push(arr[j]);
    }
  }
  return somearray;
};

const compareElement = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (element > array[i]) {
      array[i] = element;
      array.fill(0, i + 1);
    }
  }
};

const joulEnergy = (arr) => {
  const battrey = arr.slice(0, 12);
  for (let i = 13; i < arr.length - 12; i++) {
    compareElement(battrey, arr[i]);
  }
  return comapreLast12(battrey, arr.slice(arr.length - 12)).join("");
};
const countJoules = (input) => {
  const inputs = input.split("\n");
  let sumOfJoules = 0;
  for (const x of inputs) {
    console.log(parseInt(joulEnergy([...x])));
    sumOfJoules += parseInt(joulEnergy([...x]));
  }
  return sumOfJoules;
};
const input = `987654321111111
811111111111119
234234234234278
818181911112111`;
console.log(countJoules(input));
