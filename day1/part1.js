const input = Deno.readTextFileSync("day1Input.txt").split("\n");
const parseData = (string) => {
  string = string.split("");
  const [instruction, ...move] = string;
  return [instruction, move.join("")];
};

const PasswordCrack = (pass) => {
  let credentails = 0;
  let gear = 50;
  for (let i = 0; i < pass.length; i++) {
    gear = password(parseData(pass[i]), gear);
    if (gear === 0) credentails++;
  }
  return credentails;
};

const password = ([instruction, move], gear) => {
  const offset = (instruction === "L") ? -1 : 1;
  return (gear + offset * move) % 100;
};
console.log(PasswordCrack(input));
