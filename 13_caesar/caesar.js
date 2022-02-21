const caesar = (str, shift) => {
  return str.split('').map((char) => { // split string into array of characters and map each character to a new array
    let code = char.charCodeAt(0); // this transforms the char into unicode
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    //check if the var code is between the unicode range of A and Z
    if(code >= 65 && code <= 90) { 
      let newCode = (code + shift) - 65; // if yes it will add the shift to the code and subtract 65 to get the new code
      if(newCode < 0) {
        newCode = alphabet.length + newCode; 
        if(newCode == alphabet[newCode]){ // compares newcode to the length of the alphabet
          return alphabet[newCode]; //if yes it will return the alphabet in the new code position
        }
      }
      if(newCode >= 0){ //if the new code is equal or greater than 0 it will return the alphabet in the new code position
        return alphabet[newCode];
      }
      
    }//check if the var code is between the unicode range of a and z
    if(code >= 97 && code <= 122) {
      let newCode = (code + shift) - 97; // if yes it will add the shift to the code and subtract 97 to get the new code
      if(newCode < 0) { // if the new code is less than 0 it will add the length of the alphabet to the new code
        newCode = alphabet.length + newCode; 
        if(newCode === alphabet[newCode]){ // compares newcode to the length of the alphabet
          return alphabet[newCode].toLowerCase(); //if yes it will return the alphabet in the new code position in lowercase
        }
      }
      if(newCode >= 0) { //if the new code is equal or greater than 0 it will return the alphabet in the new code position
        return alphabet[newCode].toLowerCase();
      }
      
    }
    if((code < 65) || (code > 90 && code < 97) || (code > 122)) { // if the code is not between A and Z or a and z it will return the char
      return String.fromCharCode(code);
    }
  }).join(''); // joins the array of characters into a string



};

// Do not edit below this line
module.exports = caesar;
