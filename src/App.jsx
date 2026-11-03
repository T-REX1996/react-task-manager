import { useContext, useReducer } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { ThemeContext, ThemeProvider } from "./ThemeContext";

const initialState = {
  tasks: [
    { id: 1, title: "React のレンダリングを理解する", completed: false },
    { id: 2, title: "state の更新方法を学ぶ", completed: true },
    { id: 3, title: "タスク管理アプリを作る", completed: false },
  ],
  history: [],
};

function tasksReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        history: [...state.history, state.tasks],
        tasks: [
          ...state.tasks,
          { id: Date.now(), title: action.title, completed: false },
        ],
      };
    case "toggle":
      return {
        history: [...state.history, state.tasks],
        tasks: state.tasks.map((task) =>
          task.id === action.id
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "delete":
      return {
        history: [...state.history, state.tasks],
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    case "undo":
      if (state.history.length === 0) return state;
      return {
        history: state.history.slice(0, -1),
        tasks: state.history[state.history.length - 1],
      };
    default:
      return state;
  }
}

function AppContent() {
  const [state, dispatch] = useReducer(tasksReducer, initialState);
  const { isDark, setIsDark } = useContext(ThemeContext);

  function handleAdd(title) {
    dispatch({ type: "add", title });
  }

  function handleToggle(id) {
    dispatch({ type: "toggle", id });
  }

  function handleDelete(id) {
    dispatch({ type: "delete", id });
  }

  function handleUndo() {
    dispatch({ type: "undo" });
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "1rem",
        background: isDark ? "#1e1e1e" : "#ffffff",
        color: isDark ? "#f0f0f0" : "#213547",
      }}
    >
      <h1>タスク管理</h1>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "ライトモード" : "ダークモード"}に切り替え
      </button>
      <TaskForm onAdd={handleAdd} />
      <button onClick={handleUndo} disabled={state.history.length === 0}>
        元に戻す
      </button>
      <TaskList
        tasks={state.tasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
