import { useState } from "react";

function TaskForm({ addTask }) {

  const [materia, setMateria] = useState("");
  const [tarea, setTarea] = useState("");
  const [fecha, setFecha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const nuevaTarea = {
      materia,
      tarea,
      fecha
    };

    addTask(nuevaTarea);

    setMateria("");
    setTarea("");
    setFecha("");
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Materia"
        value={materia}
        onChange={(e) => setMateria(e.target.value)}
      />

      <input
        type="text"
        placeholder="Nombre de la tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />

      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <button type="submit">
        Agregar tarea
      </button>

    </form>
  );
}

export default TaskForm;