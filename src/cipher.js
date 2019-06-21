window.cipher = {
  encode: (offset, string) => {

    let cifra = "";  
    for (let i = 0; i < string.length; i++) {  
      let numascii = string.charCodeAt(i);
      if (65 <= numascii && numascii <= 90) {  
        cifra += String.fromCharCode((numascii - 65 + offset) % 26 + 65); 
      } else if (numascii === 32) {  
        cifra += " ";  
      }
    }
    return cifra; 
  },

  decode: (offset, string) => {
    let descifra = "";
    for (let i = 0; i < string.length; i++) {
      let numascii = string.charCodeAt(i);
      if (65 <= numascii && numascii <= 90) {
        descifra += String.fromCharCode((numascii + 65 - offset) % 26 + 65);
      } else if (numascii === 32) {
        descifra += " ";
      }
    }
    return descifra;
  }
};
