const fibonacci = function (n) {
  const ourArray = [1, 1];
  if (n == 1 || n == 2) {
    return 1;
  } else if (n < 0) {
    return "OOPS";
  }

  for (let i = 2; i <= n; i++) {
    ourArray.push(ourArray[i - 1] + ourArray[i - 2]);
  }

  return ourArray[n - 1];
};

module.exports = fibonacci;
