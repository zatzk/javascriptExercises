const ftoc = (num) => {
  num = (num - 32) * (5/9);
  if(num > 0 || num < 0) {
    return Number(num.toFixed(1));
  }else {
    return num;
  }
};

const ctof = function(num) {
  num = num * (9/5) + 32;
  if(num > 0 || num < 0) {
    return Number(num.toFixed(1));
  }else {
    return num;
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
