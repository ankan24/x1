import React, { useContext, useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoForm() {
   const [inp,setInp]=useState<string|"">("")
   const {addTodo}=useTodo()
   const handelAdd=()=>{
    if(inp.trim()!=""){
        addTodo({
            id:Date.now(),
            msg:inp,
            isComplete:false
        })
    }
    setInp("")
   }
    return (
      <>
          <input type='text' value={inp} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInp(e.target.value)} />
            <button onClick={handelAdd}>Add</button>
      </>
    )
}

export default TodoForm