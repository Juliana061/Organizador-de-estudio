import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask }) {

  return (
    <div>

      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
        />
      ))}

    </div>
  );
}

export default TaskList;