const palindromes = function (string) {
  let str = string;
  const punctuation = [' ', ',', '!', '.'];
  let formattedStr = str
    .toLowerCase()
    .split('')
    .filter((i) => {
      return !punctuation.includes(i);
    })
    .join('');

  return formattedStr === formattedStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
