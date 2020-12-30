const reverseString = function (string) {
  let reversedString = "";
  for (i = 0; i <= string.length; i++) {
    reversedString += string.charAt(string.length - i);
  }
  return reversedString;
};





module.exports = reverseString;
