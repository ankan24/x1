export  interface TodoType {
  id: number;
  msg: string;
  isComplete: boolean;
}

interface StateType {
  todos: TodoType[];
  editing: number | null;
}

interface ActionType {
  type: string;
  payload?: any;
}

const initialState: StateType = {
  todos: [],
  editing: null,
};

export const todoReducer = (state = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };

    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload.id ? { ...t, msg: action.payload.msg } : t
        ),
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };

    case 'SET_EDITING':
      return { ...state, editing: action.payload };

    default:
      return state;
  }
};
