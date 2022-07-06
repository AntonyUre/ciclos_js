let ticketGanador = Math.floor(Math.random() * 10) + 1;
console.log("El ticket ganador es " + ticketGanador);

let intentos = 3;
let contenedor = document.getElementById("vidas");

function loteria() {

  for (let i = 1; i <= intentos; i++) {
    let ticketUsuario = prompt("Ingrese el numero del ticket");
    if (ticketUsuario == ticketGanador) {
      console.log("GANASTE!");
      contenedor.innerText = "GANASTE!";
      break;
    } else {
      console.log(`Tienes ${intentos - i} intentos, PERDISTE`);
      contenedor.innerHTML = `Tienes ${intentos - i} intentos`;
    }
  }
}
