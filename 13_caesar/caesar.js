const caesar = (str, shift) => {
  return str.split('').map((char) => {
    let code = char.charCodeAt(0); // this transforms the char into unicode
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    //check if the code var is between the unicode range of A and Z
    if(code >= 65 && code <= 90) { 
      let newCode = (code + shift) - 65; // 
      if(newCode < 0) {
        newCode = alphabet.length + newCode;
        if(newCode == alphabet[newCode]){
          return alphabet[newCode];
        }
      }
      if(newCode >= 0){
        return alphabet[newCode];
      }
      
    }
    if(code >= 97 && code <= 122) {
      let newCode = (code + shift) - 97;
      if(newCode < 0) {
        newCode = alphabet.length + newCode;
        if(newCode === alphabet[newCode]){
          return alphabet[newCode].toLowerCase();
        }
      }
      if(newCode > 0) {
        return alphabet[newCode].toLowerCase();
      }
      
    }
    if((code < 65) || (code > 90 && code < 97) || (code > 122)) {
      return String.fromCharCode(code);
    }
  }).join('');



};

// Do not edit below this line
module.exports = caesar;
