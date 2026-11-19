export function contarPendientes(tareas) {
  return tareas.filter((tarea) => !tarea.completada).length;
}

//contarCompletadas
export function contarCompletadas(tareas) {
  return tareas.filter((tarea) => tarea.completada).length;
}
