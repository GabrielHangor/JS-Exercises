// const removeFromArray = function (array, ...args) {
//   const indexes = [];
//   args.forEach((number) => {
//     indexes.push(array.indexOf(number));
//   });

//   indexes.forEach((index) => {
//     if (index > -1) {
//       array.splice(index, 1);
//     }
//   });
//   return array;
// };

// const removeFromArray = function (array, ...args) {
//   array.forEach((element) => {
//     args.forEach((arg) => {
//       if (array.includes(arg)) {
//         array.removeFromArray(element);
//       }
//     });
//   });
//   console.log
// };


const removeFromArray = function (array, ...args) {
  const filteredArray = array.filter((item) => !args.includes(item));
  return filteredArray;
};

module.exports = removeFromArray;
