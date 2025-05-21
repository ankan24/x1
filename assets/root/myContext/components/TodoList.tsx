import React from "react";
import { useTodo } from "../context/TodoContext";


const TodoList = () => {
  const { todos, deleteTodo, setEditing } = useTodo();



  if (todos.length === 0) {
    return <p className="text-center text-gray-600">No records found</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border border-gray-300 rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Edit</th>
            <th className="p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(task => (
            <tr key={task} className="border-t">
              <td className="p-2 capitalize">{task}</td>
              <td className="p-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" onClick={() => setEditing(task)}>Edit</button>
              </td>
              <td className="p-2">
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => deleteTodo(task)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default TodoList;
