const input = Deno.readTextFileSync("day1Input.txt").split("\n");
let credentials = 0;
let isRounded = -1;
const hasHitZero = (gear, move, offset) => {
  for (let i = 0; i < move; i++) {
    gear += offset;
    if (gear % 100 === 0) {
      credentials++;
      continue;
    }
    if (gear % -100 === 0) credentials++;
  }
  return gear;
};
const parseData = (string) => {
  string = string.split("");
  const [instruction, ...move] = string;
  return [instruction, move.join("")];
};
const offsetNum = (num) => {
  if (num.toString()[0] === "-") return "-";
  return "";
};
const PasswordCrack = (pass) => {
  let gear = 50;
  for (let i = 0; i < pass.length; i++) {
    gear = password(parseData(pass[i]), gear);
    console.log(gear);
  }
  return credentials;
};

const password = ([instruction, move], gear) => {
  const offset = (instruction === "L") ? -1 : 1;
  return hasHitZero(gear, move, offset);
};
// console.log(
//   PasswordCrack([ //50
//     "L68", //-18
//     "L30", //-48
//     "R48", //0
//     "L5", //-5
//     "R60", //55
//     "L55", //0
//     "L1", //-1
//     "L99", //1
//     "R14",
//     "L82",
//   ]),
// );
console.log(PasswordCrack(input));
