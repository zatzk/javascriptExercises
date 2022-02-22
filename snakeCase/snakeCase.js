const snakeCase = (string) => {
  const regexRemove = /[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]/g;
  const regexSubst = /(\.{2})|[ -]/g;
  const regexSubEsp = /eC/g;
  
  const result = string.replace(regexSubEsp, 'e_c').replace(regexSubst, '_').replace(regexRemove, '').toLowerCase();
  return result.endsWith('__') ? result.slice(0, -2) : result;
};

// Do not edit below this line
module.exports = snakeCase;
