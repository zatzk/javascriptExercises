function pigLatin(string) {
  return string.split(' ').map(word => {
    const vowels = /[aeio]/;
    const consonants = /[bcdfghjklmnpqrstvuwxyz]/
    
    
    if (word[0].match(consonants) && word[1].match(consonants) && word[2].match(consonants)) {
      return word.substring(3) + word[0] + word[1] + word[2] + 'ay';
    } 
    if (word[0].match(consonants) && word[1].match(consonants)) {
      return word.substring(2) + word[0] + word[1] + 'ay';
    } 
    if (word[0].match(vowels)) {
      return word + 'ay';
    } 
    if (word[0].match(consonants)) {
      return word.substring(1) + word[0] + 'ay';
    } 
    
  }).join(' ');
};
  
// Do not edit below this line
module.exports = pigLatin;
