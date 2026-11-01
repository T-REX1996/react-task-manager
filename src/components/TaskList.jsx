function TaskList({ tasks, onToggle, onDelete }) {

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span className={task.completed ? "completed" : ""}>{task.title}</span>
          <button onClick={() => onDelete(task.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
