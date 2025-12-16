const canStillFill = (battreyLength, remaining, target) => {
  return battreyLength + remaining >= target;
};

const shouldReplace = (current, last) => {
  return current > last;
};

const canPop = (battrey, current, remaining, target) => {
  if (!shouldReplace(current, battrey[battrey.length - 1])) return false;

  return canStillFill(battrey.length - 1, remaining, target);
};

const joulEnergy = (arr) => {
  const TARGET = 12;
  const battrey = [];

  for (let i = 0; i < arr.length; i++) { //`818181911112111`;
    const current = arr[i];
    const remaining = arr.length - i;

    while (canPop(battrey, current, remaining, TARGET)) {
      battrey.pop();
    }

    if (battrey.length < TARGET) {
      battrey.push(current);
    }
  }
  return battrey.join("");
};

const countJoules = (input) => {
  const inputs = input.split("\n");
  let sum = 0;

  for (const line of inputs) {
    sum += parseInt(joulEnergy([...line]));
  }

  return sum;
};

const input = Deno.readTextFileSync("part1.txt");
console.log(countJoules(input));
