import type { TodoType } from './todoReducer';

export const addTodo = (todo: TodoType) => ({ type: 'ADD_TODO', payload: todo });
export const updateTodo = (id: number, msg: string) => ({ type: 'UPDATE_TODO', payload: { id, msg } });
export const deleteTodo = (id: number) => ({ type: 'DELETE_TODO', payload: id });
export const setEditing = (id: number | null) => ({ type: 'SET_EDITING', payload: id });
