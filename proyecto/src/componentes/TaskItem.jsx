function TaskItem({ task, index, deleteTask }) {

  return (
    <div className="task">

      <h3>{task.tarea}</h3>

      <p><b>Materia:</b> {task.materia}</p>

      <p><b>Fecha de entrega:</b> {task.fecha}</p>

      <button onClick={() => deleteTask(index)}>
        Eliminar
      </button>

    </div>
  );
}

export default TaskItem;