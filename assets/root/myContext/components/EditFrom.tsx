import React, { useState, useEffect } from "react";
import { useTodo } from "../context/TodoContext";

const EditForm = () => {
  const { editing, updateTodo, setEditing } = useTodo();
  const [input, setInput] = useState("");

  // ✅ Whenever "editing" changes, update the input field
  useEffect(() => {
    setInput(editing || "");
  }, [editing]);

  if (!editing) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      updateTodo(editing, input.trim());
      setEditing(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
      <input
        type="text"
        className="flex-1 px-4 py-2 border rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Edit task"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Update
      </button>
      <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={() => setEditing(null)}>
        Cancel
      </button>
    </form>
  );
};

export default EditForm;
