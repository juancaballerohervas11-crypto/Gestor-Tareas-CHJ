import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";

const h1 = document.querySelector("h1");
h1.textContent = "Gestor de tareas";
h1.classList.add("titulo");

const resumen = document.querySelector("#resumen");
resumen.textContent = `Tienes ${contarPendientes(estado.tareas)} tareas pendientes`;


const lista = document.querySelector("#lista");
for (const texto of ["Uno", "Dos", "Tres"]) {
  const li = document.createElement("li");
  li.className = "demo";
  li.textContent = texto;
  lista.append(li);
}


const demos = document.querySelectorAll(".demo");
demos.forEach((li) => {
  li.textContent = "- " + li.textContent;
});

// 1. getElementById lleva el id SIN "#": getElementById("lista")
const listaPorId = document.getElementById("lista");

// 2. Seleccionar por clase (sin punto)
const coleccion = document.getElementsByClassName("demo");

// 3.da error.
// coleccion.forEach((li) => console.log(li));
// Error: TypeError: coleccion.forEach is not a function
// Uncaught TypeError: coleccion.forEach is not a function


Array.from(coleccion).forEach((li) => {
  li.textContent = li.textContent.replace("- ", "✓ ");
});

// 5. La HTMLCollection es VIVA: si añades o quitas nodos, se actualiza sola.
//    La NodeList de querySelectorAll es ESTÁTICA: es una foto del momento en que la pediste.