import "./style.css";
import { render } from "./dom.js";

const h1 = document.querySelector("h1");
h1.textContent = "Gestor de tareas";
h1.classList.add("titulo");

render();