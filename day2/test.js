const countOccurance = (str, string, index = 0) => {
  let count = 0;
  while (string.indexOf(str, index) !== -1) {
    count++;
    index = string.indexOf(str, index) + 1;
  }
  return count;
};
countOccurance("10", "201010202010");
