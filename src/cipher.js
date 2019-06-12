window.cipher = {
  encode: (offset, string) => {

    const cifrar1= (offset,string) => {
      let mensaje = "";
      for (let i = 0; i < string.length;i++) {
           mensaje += String.fromCharCode((string.charCodeAt(i)-65+offset) % 26 +65);
      }
      return mensaje;
    }
  },


 
  decode: (offset, string) => {
    const descifrar1= (offset,string) => {
      let mensaje = "";
      for (let i = 0; i < string.length;i++) {
           mensaje += String.fromCharCode((string.charCodeAt(i)+65-offset) % 26 +65);
      }
      return mensaje;
    } 
  }
};

//window.cipher = {
  //encode: cifrar1,
  //decode: descifrar1}
