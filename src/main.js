import "./style.css";
import { render } from "./dom.js";
import { renderNotas } from "./dom-notas.js";  


const h1 = document.querySelector("h1");
h1.textContent = "Gestor de tareas";
h1.classList.add("titulo");

render();
renderNotas();                                   

/* ===== RETO 1: Predice antes de ejecutar =====

PREDICCIÓN:
A: 0 0
B: 1 0
C: Gestor 1
D: null
Texto que mostrará el li nuevo en pantalla: <b>Nueva</b> (literal, con las etiquetas)

RESULTADO DE LA CONSOLA:
A: 0 0
B: 1 0
C: Gestor 1
D: null
El li nuevo se ve en pantalla como: <b>Nueva</b>

EXPLICACIÓN DE CADA LÍNEA:
- A: 0 0 -> todavía no existe ningún elemento con clase "prueba", así que
  tanto la HTMLCollection como la NodeList están vacías.
- B: 1 0 -> getElementsByClassName devuelve una HTMLCollection VIVA, que se
  actualiza sola al añadir el li (1). querySelectorAll devuelve una NodeList
  ESTÁTICA, una foto de antes de crear el li, y sigue en 0.
- C: Gestor 1 -> innerHTML interpreta "<em>Gestor</em>" y crea un elemento
  <em> hijo real (children.length = 1). textContent devuelve solo el texto,
  sin etiquetas: "Gestor".
- D: null -> getElementById va SIN "#". Busca un id literal "#lista" que no
  existe, y devuelve null.
- Texto del li: textContent trata "<b>Nueva</b>" como texto plano, no como
  HTML, así que las etiquetas se ven escritas tal cual.

const lista = document.querySelector("#lista");

const vivos = document.getElementsByClassName("prueba");
const foto = document.querySelectorAll(".prueba");
console.log("A:", vivos.length, foto.length);

const li = document.createElement("li");
li.className = "prueba";
li.textContent = "<b>Nueva</b>";
lista.append(li);
console.log("B:", vivos.length, foto.length);

const h1 = document.querySelector("h1");
h1.innerHTML = "<em>Gestor</em>";
console.log("C:", h1.textContent, h1.children.length);

console.log("D:", document.getElementById("#lista"));

*/