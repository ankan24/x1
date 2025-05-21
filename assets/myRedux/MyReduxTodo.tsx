import React from 'react';
import TodoForm from './components/TodoFrom';
import TodoItem from './components/TodoItem';
import EditTodo from './components/EditTodo';
import { Provider } from 'react-redux';
import { store } from './redux/store';
function MyReduxTodo() {
  return (
     <Provider store={store}>
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Redux Todo App</h1>
      <TodoForm />
      <EditTodo />
      <TodoItem />
    </div>
    </Provider>
  );
}

export default MyReduxTodo;
