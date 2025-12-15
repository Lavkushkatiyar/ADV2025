const countSequance = (string) => {
  let str = "";
  for (let i = 0; i < string.length / 2; i++) {
    str += string[i];
    let count = 1;
    for (let j = str.length; j < string.length; j += str.length) {
      const slice = string.slice(j, j + str.length);
      if (str !== slice) break;
      count++;
    }
    // must repeat at least twice and cover the full string
    if (count > 1 && count === string.length / str.length) return true;
  }
  return false;
};

const isInvalid = (num) => {
  // single digit cannot be a repeated sequence
  if (num.length < 2) return false;

  const mid = Math.floor(num.length / 2);
  const part1 = num.slice(0, mid);
  const part2 = num.slice(mid);

  // exact half repetition (covers cases like 11, 1212, 123123)
  if (part1 === part2 && part1 !== "") return true;

  // general repeated-sequence check (>= 2 times)
  if (countSequance(num)) return true;

  return false;
};

const invalidID = (range) => {
  let sum = 0;
  const [start, end] = range.split("-");
  const s = parseInt(start, 10);
  const e = parseInt(end, 10);

  for (let i = s; i <= e; i++) {
    if (isInvalid(i.toString())) {
      sum += i;
    }
  }
  return sum;
};

const findInvalid = (range) => {
  let sumOfInvalidId = 0;
  const ranges = range.split(",");

  for (const r of ranges) {
    sumOfInvalidId += invalidID(r);
  }
  return sumOfInvalidId;
};

console.log(
  findInvalid(
    "8123221734-8123333968,2665-4538,189952-274622,4975-9031,24163352-24202932,1233-1772,9898889349-9899037441,2-15,2147801-2281579,296141-327417,8989846734-8989940664,31172-42921,593312-632035,862987-983007,613600462-613621897,81807088-81833878,13258610-13489867,643517-782886,986483-1022745,113493-167913,10677-16867,372-518,3489007333-3489264175,1858-2534,18547-26982,16-29,247-366,55547-103861,57-74,30-56,1670594-1765773,76-129,134085905-134182567,441436-566415,7539123416-7539252430,668-1146,581563513-581619699"
  )
);
