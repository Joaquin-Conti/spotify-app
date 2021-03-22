import { uiReducer } from './uiReducer';
import { combineReducers } from "redux";
import { userDataReducer } from './userDataReducer';
import { loginReducer } from "./loginReducer";
import { errorReducer } from './errorReducer';

// const rootReducer = (state, action) => {
//   if (action.type === 'USER_LOGOUT') {
//     state = undefined
//   }

//   return appReducer(state, action)
// }

export const rootReducer = combineReducers({
  login: loginReducer,
  userData: userDataReducer,
  ui: uiReducer,
  error: errorReducer,
})

export type RootState = ReturnType<typeof rootReducer>

