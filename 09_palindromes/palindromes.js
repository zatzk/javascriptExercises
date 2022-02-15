const palindromes =  (str) => {
  let newStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reverseStr = newStr.split('').reverse('').join('');
  return true ? reverseStr == newStr : false;
};

// Do not edit below this line
module.exports = palindromes;
