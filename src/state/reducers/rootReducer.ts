import { uiReducer } from './uiReducer';
import { combineReducers } from "redux";
import { userDataReducer } from './userDataReducer';
import { loginReducer } from "./loginReducer";
import { errorReducer } from './errorReducer';

export const rootReducer = (state: any, action: any) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export const appReducer = combineReducers({
  login: loginReducer,
  userData: userDataReducer,
  ui: uiReducer,
  error: errorReducer,
})

export type RootState = ReturnType<typeof rootReducer>

