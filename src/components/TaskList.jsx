import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function TaskList({ tasks, onToggle, onDelete }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <ul style={{ background: isDark ? "#333" : "#f5f5f5" }}>
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
