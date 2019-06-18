window.cipher = {
  encode: (offset, string) => {
 
    let cifra = "";  // la variable nos servira para almacenar el valor del string cifrado
    for (let i = 0; i < string.length; i++) {  // para recorrer todo el string del texto
      let numascii = string.charCodeAt(i);
      if (65 <= numascii && numascii <= 90) {  // valor de las letras mayusculas en ASCII
        cifra += String.fromCharCode((numascii - 65 + offset) % 26 + 65); // formar la cadena del texto con el valor obtenido luego de aplicar formula
      } else if (numascii === 32) {  // para verificar si es un espacio vacio
        cifra += " ";  // añadir espacio en string cifrado
      }
    }
    return cifra; //retorna el valor de la cadena cifrada
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
