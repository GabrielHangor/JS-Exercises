function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

function multiply(values) {
  return values.reduce((total, value) => total * value);
}

function power(a, b) {
  return a ** b;
}

function factorial(number) {
  const numbers = [];
  for (let i = 1; i <= number; i++) {
    numbers.push(i);
  }
  return numbers.reduce((total, number) => total * number, 1);
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
