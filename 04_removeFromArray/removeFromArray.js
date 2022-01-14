const removeFromArray = function () {
  let [arr, ...targets] = [...arguments];

  targets.forEach((el) => {
    arr = arr.filter((arr_el) => arr_el !== el);
  });

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
