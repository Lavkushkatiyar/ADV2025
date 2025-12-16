// find 12 largsest in the array
const input = Deno.readTextFileSync("part1.txt");

const nextLargest = (arr, index) => {
  let largest = 0;
  for (let i = index; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  arr[arr.indexOf(largest)] = -1;
  return largest;
};
const countBattrey = (arr) => {
  let sum = "";
  for (let i = 0; i < 12; i++) {
    sum += nextLargest(arr, 0);
  }
  return sum;
};

const countJoules = (input) => {
  const inputs = input.split("\n");
  let sumOfJoules = 0;
  for (const x of inputs) {
    const oneBattrey = x.split("");
    console.log(parseInt(countBattrey(oneBattrey)));
    sumOfJoules += parseInt(countBattrey(oneBattrey));
  }
  return sumOfJoules;
};
countJoules(
  "987654321111111\n811111111111119\n234234234234278\n818181911112111",
);
