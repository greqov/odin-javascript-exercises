const ftoc = function (ftemp) {
  const ctemp = ((ftemp - 32) * 5) / 9;
  return Number(ctemp.toFixed(1));
};

const ctof = function (ctemp) {
  const ftemp = (ctemp * 9) / 5 + 32;
  return Number(ftemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
