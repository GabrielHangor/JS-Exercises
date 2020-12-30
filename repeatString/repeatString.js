const repeatString = function (string, number) {
  let ourString = "";
  if (number < 0) {
    return "ERROR";
  } else {
    for (i = 1; i <= number; i++) {
      ourString += string;
    }
    return ourString;
  }
};

module.exports = repeatString;
