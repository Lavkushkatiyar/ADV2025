const parseInput = (input) => {
  const mathArray = [];
  const inputs = input.split("\n");
  for (let row of inputs) {
    const innerArray = [];
    row = row.trim();
    for (let i = 0; i < row.length; i++) {
      if (row[i] === " " && row[i + 1] === " ") continue;
      innerArray.push(row[i]);
    }
    mathArray.push(innerArray.join("").split(" "));
  }
  return mathArray;
};

const trashCompact = (arr) => {
  let ans = "";
  for (let j = 0; j < arr.length; j++) {
    let string = "";
    for (let i = arr.length - 2; i >= 0; i--) {
      const operator = arr[arr.length - 1][j];
      string += arr[i][j] + operator;
    }
    ans += eval(string.slice(0, string.length - 1)) + "+";
  }
  return eval(ans.slice(0, ans.length - 1));
};

const x = parseInput(input);
trashCompact(x);
