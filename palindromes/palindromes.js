const palindromes = function (string) {
  const ourArray = [...string]
    .filter((element) =>element !== "!" && element !== "." && element !== "," && element !== " ")
    .map((word) => word.toLowerCase())
    .join('');

  const reversedArray = [...string]
    .reverse()
    .filter((element) =>element !== "!" && element !== "." && element !== "," && element !== " ")
    .map((word) => word.toLowerCase())
    .join('');

  console.log(ourArray, reversedArray);
  return ourArray === reversedArray ? true : false;
};

palindromes("A car, a man, a maraca.");

module.exports = palindromes;
