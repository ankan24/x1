import { useState } from "react";
import { useTodos } from "./TodoContext";

const TodoList = () => {
    const { todos, addTodo } = useTodos();
    const [text, setText] = useState("");

    const handleAdd = () => {
        if (text.trim()) {
            addTodo(text);
            setText("");
        }
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

