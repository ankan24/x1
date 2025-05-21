import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
interface TodoType{
    id:number;
    msg:string;
    isComplete:boolean;
}
interface TodoContextType{
    todos:TodoType[];
    addTodo:(todo:TodoType)=>void;
    updateTodo:(id:number,msg:string)=>void;
    deleteTodo:(id:number)=>void;
    //then after need i will add
    editing:number|null;
    setEditing:(args:number|null)=>void;
}

export const TodoContext= createContext<TodoContextType|undefined>(undefined);

export const useTodo=()=>{
    const context= useContext(TodoContext);
    if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
    return context;
}

export const TodoProvider=({children}:{children:ReactNode})=>{
    const [todos,setTodos]=useState<TodoType[]>([]);
    const [editing,setEditing]=useState<number|null>(null)
    const addTodo=(todo:TodoType)=>{
        setTodos((prev)=>[...prev,todo]);
    }
    const updateTodo=(id:number,msg:string)=>{
        setTodos(todos.map((t)=>{
          return (t.id===id)?{...t,msg:msg}:t;
        }))
    }
    const deleteTodo=(id:number)=>{
        setTodos(todos.filter((t)=>{return t.id!==id}))
    }
    return(
        <TodoContext.Provider value={{todos,addTodo,updateTodo,deleteTodo,editing,setEditing}}>
            {children}
        </TodoContext.Provider>
    )
}