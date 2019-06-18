// Llamando los ID de las cajas de texto y boton de ingreso

const inicio = document.getElementById("login");
const reporte = document.getElementById("cipher");
const ingresar = document.getElementById("next");

let contador = 0;

// creando la CONTRASEÑA: LABORATORIA para ingresar y los mensajes de error

ingresar.addEventListener("click", (event) => {
  event.preventDefault();
  const contraseña = document.getElementById("password").value;
  if (contraseña === "LABORATORIA") {
    inicio.classList.add("hide");
    reporte.classList.remove("hide");
  }
  else if
    (contador == 3) {
    document.getElementById("error").innerHTML = "Ya utilizaste todos tus intentos, en este momento no podrás ingresar";
  }
  else {
    contador++
    document.getElementById("error").innerHTML = "contraseña incorrecta";
  }
 });

// llamando a los ID de los botones de cifrado y descifrado 

const btncifrar = document.getElementById("encode");
const btndescifrar = document.getElementById("decode");

// llamando al boton cifrar 
btncifrar.addEventListener("click", () => {
  let string = document.getElementById("message").value.toUpperCase(); // toUppercase: para devolver el valor en mayusculas.
  let offset = parseInt(document.getElementById("clave").value); // value : captura el valor ingresado en la caja
  document.getElementById("result").innerHTML = cipher.encode(offset, string);//parseInt lo que hace es analizar una cadena de texto y retornar el valor numérico.
});

// llamando al boton descifrar
btndescifrar.addEventListener("click", () => {
  let string = document.getElementById("message").value; // usamos let porque sabemos que nuestro elemento cambiarara segun el texto ingresado 
  let offset = parseInt(document.getElementById("clave").value); 
  document.getElementById("result").innerHTML = cipher.decode(offset, string);

});

// llamando al boton limpiar
document.getElementById("clean").addEventListener("click", (event) => {
  event.preventDefault
  document.getElementById("result").innerHTML = null;
  document.getElementById("message").value = null;
  document.getElementById("clean").innerHTML= null;
})