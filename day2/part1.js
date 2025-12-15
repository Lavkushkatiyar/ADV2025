const leadingZero = (num) => (num[0] === "0");

const existAfterIndex = (num, range, index) => range.includes(num, index);

const isSequence = (num1, num2) => num1 === num2;

const numberOfSequence = (num, sequence, index) => {
  let count = 0;
  let i = 0;
  while (i < 10) {
    if (num.indexOf(sequence, index) !== -1) {
      index = num.indexOf(sequence, index);
      count++;
      i++;
    } else break;
  }

  return count;
};
const findInvalidId = (num1) => {
  for (let i = 0; i < num1.length; i++) {
    const sequence = num1[i] + num1[i + 1];
    if (existAfterIndex(sequence, num1, i + 1)) count++;
  }
};

const invalidID = (range) => {
  const sumOfInvalidId = 0;
  const [start, end] = range.split("-");

  if (leadingZero(start)) sumOfInvalidId += parseInt(start);
  if (leadingZero(end)) sumOfInvalidId += parseInt(end);
  for (let i = start; i < end; i++) {
  }
};
