import { alumnos, calcularMedia, contarAprobados } from "./notas.js";

export function renderNotas() {
  const lista = document.querySelector("#lista-notas");
  const resumen = document.querySelector("#resumen-notas");

  lista.replaceChildren();

  //  para NO mutar el array original 
  const ordenados = [...alumnos].sort((a, b) => b.nota - a.nota);

  for (const alumno of ordenados) {
    const li = document.createElement("li");
    li.textContent = `${alumno.nombre} — ${alumno.nota}`;
    li.classList.add(alumno.nota >= 5 ? "aprobado" : "suspenso");
    lista.append(li);
  }

  const media = calcularMedia(alumnos).toFixed(1);
  const aprobados = contarAprobados(alumnos);
  resumen.textContent = `Media: ${media} · Aprobados: ${aprobados} de ${alumnos.length}`;
}