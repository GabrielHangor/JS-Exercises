const sumAll = function (a, b) {
  let finalSum = 0;
  if (a > b) {
    [b, a] = [a, b];
    for (let i = a; i <= b; i++) {
      finalSum += a++;
    }
  } else if (a < 0 || b < 0) {
    return "ERROR";
  } else if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  } else {
    for (let i = a; i <= b; i++) {
      finalSum += a++;
    }
  }
  return finalSum;
};

module.exports = sumAll;
