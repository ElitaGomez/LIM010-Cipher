window.cipher = {
  encode: (offset, string) => {

    let cifra = "";
    for (let i = 0; i < string.length; i++) {
      let numascii = string.charCodeAt(i);
      if ((numascii >= 65) && (numascii <= 90)) {
        cifra += String.fromCharCode((parseInt(offset) + numascii - 65) % 26 + 65);
      } else {
        cifra += string.charAt(i);
      }
    }
    return cifra;

  },

  decode: (offset, string) => {
    let descifra = "";
    for (let i = 0; i < string.length; i++) {
      let numascii = string.charCodeAt(i);
      if ((numascii >= 65) && (numascii <= 90)) {
        if (numascii >= 65 + parseInt(offset) % 26) {
          descifra += String.fromCharCode((numascii - parseInt(offset) % 26 - 65) + 65);
        } else {
          descifra += String.fromCharCode((numascii - parseInt(offset) % 26 + 26));
        }
      } else {
        descifra += string.charAt(i);
      }
    }
    return descifra;

  }
}
