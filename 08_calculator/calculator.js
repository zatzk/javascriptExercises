const add = (n1, n2) => {
	return n1 + n2;
};

const subtract = (n1, n2) => {
	return n1 - n2;
};

const sum = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

const multiply = (arr) => {
  return arr.reduce((arr, curr) => {
    return arr * curr;
  }, 1);
};

const power = (n1, n2) => {
	return n1 ** n2;
};

const factorial = function(num) {
	return num == 0 ? 1 : num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
