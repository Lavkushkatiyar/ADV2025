const input = Deno.readTextFileSync("part1.txt");

const nextLargest = (arr, index) => {
  let largest = 0;
  for (let i = index; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
};

const joulEnergy = (arr) => {
  const battery = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const first = arr[i];
    const second = nextLargest(arr, i + 1);
    battery.push(first + second);
  }
  return battery;
};
const countJoules = (input) => {
  const inputs = input.split("\n");
  let sumOfJoules = 0;
  for (const x of inputs) {
    console.log(parseInt(joulEnergy([...x]).sort((a, b) => b - a)[0]));
    sumOfJoules += parseInt(joulEnergy([...x]).sort((a, b) => b - a)[0]);
  }
  return sumOfJoules;
};

console.log(countJoules(input));
