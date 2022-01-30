const removeFromArray = function(array, ...args) {
  let argsArray = args;
  let result = array.filter(element => !argsArray.includes(element));
  console.log(result);
  return result;
};
  
// Do not edit below this line
module.exports = removeFromArray;
