import { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = title.trim();
    if (trimmed === "") {
      return;
    }
    onAdd(trimmed);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="新しいタスク"
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default TaskForm;
