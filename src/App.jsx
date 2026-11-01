import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const initialTasks = [
  { id: 1, title: "React のレンダリングを理解する", completed: false },
  { id: 2, title: "state の更新方法を学ぶ", completed: true },
  { id: 3, title: "タスク管理アプリを作る", completed: false },
];

function App() {
  console.log("App rendered");
  const [tasks, setTasks] = useState(initialTasks);

  function handleAdd(title) {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  }

  function handleToggle(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <h1>タスク管理</h1>
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </>
  );
}

export default App;
