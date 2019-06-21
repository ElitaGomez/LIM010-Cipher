// Llamando los ID de las cajas de texto y boton de ingreso

const inicio = document.getElementById("login");
const reporte = document.getElementById("cipher");
const ingresar = document.getElementById("next");
const btncifrar = document.getElementById("encode");
const btndescifrar = document.getElementById("decode");
let contador = 0;

// creando la CONTRASEÑA: LABORATORIA
ingresar.addEventListener("click", (event) => {
  event.preventDefault();
  const contraseña = document.getElementById("password").value;
  if (contraseña === "LABORATORIA") {
    inicio.classList.add("hide");
    reporte.classList.remove("hide");
  }else if(contador == 3) {
    document.getElementById("error").innerHTML = "Ya utilizaste todos tus intentos, en este momento no podrás ingresar";
  }
  else {
    contador++
    document.getElementById("error").innerHTML = "contraseña incorrecta";
  }
});

// llamando al boton cifrar 
btncifrar.addEventListener("click", () => {
  let string = document.getElementById("message").value.toUpperCase(); 
  let offset = parseInt(document.getElementById("clave").value); 
  document.getElementById("result").innerHTML = cipher.encode(offset, string);
});

// llamando al boton descifrar
btndescifrar.addEventListener("click", () => {
  let string = document.getElementById("message").value; 
  let offset = parseInt(document.getElementById("clave").value);
  document.getElementById("result").innerHTML = cipher.decode(offset, string);

});

// llamando al boton limpiar
document.getElementById("clean").addEventListener("click", (event) => {
  event.preventDefault
  document.getElementById("result").innerHTML = null;
  document.getElementById("message").value = null;
  document.getElementById("llave").innerHTML = null;
})