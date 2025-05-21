 import React, { createContext, useState } from "react";
import type { ReactNode } from "react"; 

type Todo = {
  id: number;
  text: string;
};

type ContextProps = {
  todos: Todo[];
  addTodo: (text: string) => void;
};

const TodoContext = createContext<ContextProps | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), text }]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const _TodoContext = TodoContext;
