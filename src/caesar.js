// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
 function caesar(input, shift, encode = true) {
    
    if(!shift || shift > 25 || shift < -25) return false;
    
    //inverse shift code
    let decode = Math.abs(shift) * -1
    
   //input is all lower case
    let lowerInput = input.toLowerCase();
    
  
 if(encode === true && shift > 0) {
   // return shifted message for encoded cipher
   return lowerInput.replace(/[a-z]/g, c => String.fromCharCode((c.charCodeAt(0)-97 + shift) % 26 + 97))
   //decoded msg if encode equals false
   
 }else if(encode === false && shift < 0){
 return lowerInput.replace(/[a-z]/g, c => String.fromCharCode((c.charCodeAt(0)-97 + shift*-1) % 26 + 97))
 
 } else {return lowerInput.replace(/[a-z]/g, c => String.fromCharCode((c.charCodeAt(0)-122 + decode) % 26 + 122)) 
        };
         
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

  