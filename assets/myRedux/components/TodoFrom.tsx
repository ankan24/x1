import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

function TodoForm() {
  const [inp, setInp] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (inp.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), msg: inp, isComplete: false }));
      setInp('');
    }
  };

  return (
    <>
      <input
        className="border p-2"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 ml-2" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default TodoForm;
