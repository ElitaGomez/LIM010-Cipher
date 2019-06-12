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
  } 
  else if 
   (contador == 2) {
   document.getElementById("error").innerHMTL= "Ya utilizaste todos tus intentos, en este momento no podrás ingresar";
  } 
  else {
    contador++
    document.getElementById("error").innerHMTL= "contraseña incorrecta";
  }
  console.log(contador)
});




// cifrando el mensaje 

const cifrar1 = document.getElementById("encode");
const descifrar1 = document.getElementById("decode");


cifrar1.addEventListener("click", () => {
  let cifrado = document.getElementById("encode").value;
  let llave1 = parseInt(document.getElementById("clave").value);
  let resultado1 = document.getElementById("result");
  resultado1.value = cipher.encode(llave1,cifrado);
});
  

descifrar1.addEventListener("click", () => {
  let descifrado = document.getElementById("decode").value;
  let llave2 = parseInt(document.getElementById("clave").value);
  let resultado2 = document.getElementById("result");
  resultado1.value = cipher.decode(llave1,cifrado);
});
   

