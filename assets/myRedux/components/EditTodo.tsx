import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEditing, updateTodo } from '../redux/actions';
import type { TodoType } from '../redux/todoReducer';

function EditTodo() {
  const { editing, todos }: { editing: number | null; todos: TodoType[] } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const [inp, setInp] = useState('');

  useEffect(() => {
    const current = todos.find((t) => t.id === editing);
    if (current) setInp(current.msg);
  }, [editing]);

  const handleSave = () => {
    if (inp.trim() && editing !== null) {
      dispatch(updateTodo(editing, inp));
      dispatch(setEditing(null));
      setInp('');
    }
  };

  if (!editing) return null;

  return (
    <div className="mt-4">
      <input
        className="border p-2"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      <button className="bg-green-600 text-white p-2 ml-2" onClick={handleSave}>Save</button>
      <button
        className="bg-gray-400 p-2 ml-2"
        onClick={() => {
          dispatch(setEditing(null));
          setInp('');
        }}
      >
        Cancel
      </button>
    </div>
  );
}

export default EditTodo;
