import React from "react";
import { TodoProvider } from "./components/TodoContext";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default App;
