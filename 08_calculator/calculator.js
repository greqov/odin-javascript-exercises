const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function () {
  const [arr] = [...arguments];

  if (arr.length === 0) return 0;

  return arr.reduce((prev, curr) => {
    return curr + prev;
  });
};

const multiply = function () {
  const [arr] = [...arguments];

  return arr.reduce((prev, curr) => {
    return curr * prev;
  });
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0) return 1;

  let res = 1;

  for (let i = 1; i <= num; i++) {
    res *= i;
  }

  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
