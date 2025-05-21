import { combineReducers } from "redux";
import { todoReducer } from "./redux/todoReducer";
import { authReducer } from "./redux/authReducer";

export const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
