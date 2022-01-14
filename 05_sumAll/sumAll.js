const sumAll = function () {
  let args = [...arguments];
  let sum = 0;

  for (let el of args) {
    if (el < 0 || typeof el !== 'number') return 'ERROR';
  }

  args = args.sort((a, b) => a - b);

  for (let i = args[0]; i <= args[1]; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
