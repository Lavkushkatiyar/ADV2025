const comapreLast12 = (battrey, arr) => {
  let somearray = [...battrey];
  let index = 0;
  for (let i = arr.length - 12; i < arr.length; i++) {
    if (arr[i] > somearray[index]) {
      somearray[index] = arr[i];
      somearray.fill("0", index + 1);
    }
    index++;
    if (index === 12) index = 0;
  }

  return somearray;
};

const compareElement = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (element > array[i]) {
      array[i] = element;
      array.fill("0", i + 1);
      break;
    }
  }
};

const joulEnergy = (arr) => {
  const battrey = arr.slice(0, 12);

  for (let i = 12; i < arr.length - 12; i++) {
    compareElement(battrey, arr[i]);
  }

  return comapreLast12(battrey, arr).join("");
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
