import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoFrom";
import EditForm from "./components/EditFrom";
import TodoList from "./components/TodoList";

const MyTodo = () => {
  return (
    <TodoProvider>
      <div className="max-w-3xl mx-auto mt-10 p-4">
        <h1 className="text-2xl font-bold text-center uppercase bg-gray-800 text-white py-3 rounded">
          Welcome to my To-Do App
        </h1>
        <div className="my-4">
          <TodoForm />
          <EditForm />
        </div>
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default MyTodo;
