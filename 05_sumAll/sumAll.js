const sumAll = function(num1, num2) {
  let sum = 0;
  if(num1 > 0 && num1 < num2) {
    for(i = num1; i <= num2; i++) {
      sum += i;
    }
  }else if(num2 > 0 && num1 > num2){
    for(i = num2; i <= num1; i++) {
      sum += i;
    }
  }else {
    sum = 'ERROR';
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
