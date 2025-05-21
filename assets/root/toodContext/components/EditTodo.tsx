import React, { useEffect, useState } from 'react'
import { useTodo } from '../context/TodoContext'

function EditTodo() {
  const {todos,editing,setEditing,updateTodo}=useTodo()
  const [inp,setInp]=useState<string>("")
  
  useEffect(()=>{
    todos.forEach((t)=>{
      if(t.id===editing){
        setInp(t.msg ||"")
        
      }
    })
  },[editing])

    const handelSave=()=>{
      if(inp.trim() && editing){
        updateTodo(editing,inp);
      }
      setEditing(null)
      setInp("")
    }

  if(!editing) return(null)
  return (
    <>
      <input type="text" value={inp} onChange={(e)=>setInp(e.target.value)} />
      <button onClick={handelSave} >save</button>
      <button onClick={()=>{setEditing(null);
        setInp("")
      }}>cancel</button>
    </>
  )
}

export default EditTodo