window.cipher = {
  encode: (offset, string) => {
    const cifrar = (offset,string) => {
        let textor = "";
        for (let i = 0; i < string.length;i++) {
             textor += String.fromCharCode((string.charCodeAt(i)-65+offset) % 26 +65);
        }
        return textor;
      }

     const descifrar = (offset,string) => {
        let textor = "";
        for (let i = 0; i < string.length;i++) {
             textor += String.fromCharCode((string.charCodeAt(i)+65-offset) % 26 +65);
        }
        return textor;
      }
      window.cipher = {
      encode: cifrar,
      decode: descifrar
      };
