import React from 'react'
import TodoForm from './components/TodoForm'
import EditTodo from './components/EditTodo'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './context/TodoContext'

function TodoApp() {
  return (
    <>
    <TodoProvider>
        <TodoForm/>
        <EditTodo/>
        <TodoItem/>
    </TodoProvider>
    </>
  )
}

export default TodoApp