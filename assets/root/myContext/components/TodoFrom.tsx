import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
      <input
        type="text"
        className="flex-1 px-4 py-2 border rounded"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
