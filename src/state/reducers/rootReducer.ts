import { uiReducer } from './uiReducer';
import { combineReducers } from "redux";
import { userDataReducer } from './userDataReducer';
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  userData: userDataReducer,
  ui: uiReducer
})

export type RootState = ReturnType<typeof rootReducer>

