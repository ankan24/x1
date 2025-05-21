import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, setEditing } from '../redux/actions';
import type { TodoType } from '../redux/todoReducer';

function TodoItem() {
  const todos: TodoType[] = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((t) => (
        <div key={t.id} className="flex items-center space-x-4 my-2">
          <li>{t.msg}</li>
          <button className="bg-yellow-400 p-1 px-3" onClick={() => dispatch(setEditing(t.id))}>Edit</button>
          <button className="bg-red-500 text-white p-1 px-3" onClick={() => dispatch(deleteTodo(t.id))}>Delete</button>
        </div>
      ))}
    </ul>
  );
}

export default TodoItem;
