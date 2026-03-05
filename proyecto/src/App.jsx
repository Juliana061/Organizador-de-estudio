import { useState } from "react";
import TaskForm from "./componentes/TaskForm";
import TaskList from "./componentes/TaskList";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="container">

      <h1>TaskStudy 📚</h1>
      <p>Organiza tus tareas universitarias</p>

      <TaskForm addTask={addTask} />

      <TaskList tasks={tasks} deleteTask={deleteTask} />

    </div>
  );
}

export default App;