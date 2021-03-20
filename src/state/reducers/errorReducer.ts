import { Action } from '../actions/actions';
import { ActionType } from './../action-types/action-types';

interface ErrorState {
  error: any
}

const initialState: ErrorState = {
  error: null  
}

export const errorReducer = (state: ErrorState = initialState, action: Action): ErrorState => {
  switch (action.type) {
    case (ActionType.ERROR):
      return {
        error: action.payload
      }
    default:
      return state
  }
}