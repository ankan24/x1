import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoItem() {
    const {todos,setEditing,deleteTodo}=useTodo();
    const handelUpdate=(id:number)=>{

    }
  return (
    <>
    <ul>
       {todos.map((t)=>{
        return <div key={t.id}>
       <li>{t.msg}</li>
       <button onClick={()=>setEditing(t.id)}>Edit</button>
       <button onClick={()=>deleteTodo(t.id)}>Delete</button>
        </div>})}
    </ul>
    </>
  )
}

export default TodoItem