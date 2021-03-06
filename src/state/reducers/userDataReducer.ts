import { Action } from '../actions/actions';
import { ActionType } from './../action-types/action-types';

interface UserDataState {
  userTopData: string[]
  userInputSelect: {
    type: string
    timeTerm: string
  }
}

const initialState = {
  userTopData: [],
  userInputSelect: {
    type: 'artists',
    timeTerm: 'long_term'
  }
}

export const userDataReducer = (state: UserDataState = initialState, action: Action): UserDataState => {
  switch (action.type) {
    case (ActionType.USER_INPUT_SELECTED):
      return {
          ...state,
          userInputSelect: action.payload
      }
    case (ActionType.USER_TOP_DATA_OBTAINED):
      return {
          ...state,
          userTopData: action.payload 
      }
    default:
      return state
  }
}