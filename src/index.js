/* Acá va tu código */
const inicio = document.getElementById("login");
const reporte = document.getElementById("cipher");
const contraseña = document.getElementById("password");
const ingresar = document.getElementById("next");
const error = document.getElementById("error");

let contador = 0;

// creando CONTRASEÑA: LABORATORIA
ingresar.addEventListener("click", (event) => {
  event.preventDefault();
  const contraseña = document.getElementById("password").value;
  if (contraseña === "LABORATORIA") {
    inicio.classList.add("hide");
    reporte.classList.remove("hide");
  } else if (contador == 2) {
    document.getElementById("error").innerHMTL = "ya no puedes ingresar";
  } else {
    contador++
    document.getElementById("error").innerHMTL = "contraseña incorrecta";
  }
});


//llamando a mis variables//
let clave = document.getElementById("clave");  clave//offset(desplazamiento)
let mensaje=document.getElementById("message"); mensaje//string(texto a cifrar)

//generando evento para desencadenar la funcion cifrar//

document.getElementById("encode").addEventListener("click",(value)=>{
  event.preventDefault();
    document.getElementById("result").value=cipher.encode(clave.value, mensaje.value);
});

//generando evento para desencadenar la funcion descifrar//

document.getElementById("decode").addEventListener("click",()=>{
document.getElementById("result").value=cipher.decode(clave.value, mensaje.value);
});
