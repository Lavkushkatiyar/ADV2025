const input = Deno.readTextFileSync("day1Input.txt").split("\n");
let credentials = 0;
const parseData = (string) => {
  string = string.split("");
  const [instruction, ...move] = string;
  return [instruction, move.join("")];
};
const offset = (num) => {
  if (num.toString()[0] === "-") return "-";
  return "";
};
const PasswordCrack = (pass) => {
  let gear = 50;
  for (let i = 0; i < pass.length; i++) {
    const [instruction, move] = parseData(pass[i]);
    const updatedGear = password(parseData(pass[i]), gear);
    if (gear === 0 && move < 100) {
      gear = updatedGear;
      continue;
    }
    if (move > 100) {
      if (gear === 0) credentials++;
    }
  }
  return credentials;
};

const password = ([instruction, move], gear) => {
  const offset = (instruction === "L") ? -1 : 1;

  return (gear + offset * move) % 100;
};
console.log(
  PasswordCrack([ //50
    "L68", //-18
    "L30", //-48
    "R48", //0
    "L5", //-5
    "R60", //55
    "L55", //0
    "L1", //-1
    "L99", //1
    "R14",
    "L82",
  ]),
);
