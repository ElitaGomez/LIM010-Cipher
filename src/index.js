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
    (contador == 3) {
    document.getElementById("error").innerHTML = "Ya utilizaste todos tus intentos, en este momento no podrás ingresar";
  }
  else {
    contador++
    document.getElementById("error").innerHTML = "contraseña incorrecta";
  }
 });




// cifrando el mensaje 

const btncifrar = document.getElementById("encode");
const btndescifrar = document.getElementById("decode");


btncifrar.addEventListener("click", () => {
  let string = document.getElementById("message").value.toUpperCase();
  let offset = parseInt(document.getElementById("clave").value);
  document.getElementById("result").innerHTML = cipher.encode(offset, string);
});


btndescifrar.addEventListener("click", () => {
  let string = document.getElementById("message").value;
  let offset = parseInt(document.getElementById("clave").value);
  document.getElementById("result").innerHTML = cipher.decode(offset, string);

});


document.getElementById("clean").addEventListener("click", (event) => {
  event.preventDefault
  document.getElementById("result").innerHTML = null;
  document.getElementById("message").value = null;
})