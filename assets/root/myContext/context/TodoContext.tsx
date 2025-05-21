//import React, { createContext, useContext, useState, ReactNode } from "react";
import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react"; // ✅ FIXED: type-only import

interface TodoContextType {
  todos: string[];
  addTodo: (task: string) => void;
  deleteTodo: (task: string) => void;
  updateTodo: (prev: string, updated: string) => void;
  setEditing: (task: string | null) => void;
  editing: string | null;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodo must be used within TodoProvider");
  return context;
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<string[]>([]);
  const [editing, setEditing] = useState<string | null>(null);

  const addTodo = (task: string) => {
    if (!todos.includes(task)) {
      setTodos([...todos, task]);
    } else {
      alert("Item already exists");
    }
  };

  const deleteTodo = (task: string) => {
    setTodos(todos.filter(t => t !== task));
  };

  const updateTodo = (prev: string, updated: string) => {
    setTodos(todos.map(t => (t === prev ? updated : t)));
    setEditing(null);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo, editing, setEditing }}>
      {children}
    </TodoContext.Provider>
  );
};
