/* Acá va tu código */
const inicio= document.getElementById('login')
const contraseña= document.getElementById("password");
const acceso= document.getElementById("next");
const reporte= document.getElementById('cipher')
const resultado= document.getElementById('result')


document.getElementById('next').addEventListener("click"),function enable(){
  if (contraseña.value=="LABORATORIA") {
    inicio..style.display= "none";
    reporte.style.display= "block";
    }
  else {
    document.getElementById('error').innerHMTL = "contraseña incorrecta"
      }
}










const cifrar1 = document.getElementById("encode");
cifrar1.addEventListener("click", () => {
    let text = document.getElementById("encode").value.toUpperCase();
    let key = parseInt(document.getElementById("llave").value);
    let result = document.getElementById("result");
    result.value = cipher.encode(key,text);
    });

const descifrar1 = document.getElementById("decode");
descifrar1.addEventListener("click", () => {
    let text = document.getElementById("decode").value.toUpperCase();
    let key = parseInt(document.getElementById("llave").value);
    let result = document.getElementById("result");
    result.value = cipher.decode(key,text);
    });
