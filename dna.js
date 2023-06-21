// 2. Write a function that takes in a DNA string (for example 'CTAGGGTA')
//  and returns a new string with any non-canonical DNA base values removed. 
//  Canonical base values are single characters: 'C', 'T', 'A', and 'G' only. 
//  Make the function case sensitive - meaning 'c' (lower case) should be removed 
//  from the string, but 'C' (upper case) is a good value and should remain.
//  If the DNA string is empty, just return an empty string.


function removeNonCanonicalDNA(dnaString) {
    let canonical = '';
    for (let i = 0; i < dnaString.length; i++) {
      let base = dnaString[i];
      if (base === 'C' || base === 'T' || base === 'A' || base === 'G') {
        canonical += base;
      }
    }
    return canonical;
  }

  module.exports = removeNonCanonicalDNA;

  // console.log(removeNonCanonicalDNA('CTAGGGTA'));
  // console.log(removeNonCanonicalDNA('JESUSjesusGTA'));