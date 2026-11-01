function TaskList({ tasks }) {
  console.log("TaskList rendered");

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span className={task.completed ? "completed" : ""}>{task.title}</span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
