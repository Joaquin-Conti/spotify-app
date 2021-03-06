import { Action } from '../actions/actions';
import { ActionType } from './../action-types/action-types';

interface UIState {
  loading: boolean
}

const initialState = {
  loading: false
}

export const uiReducer = (state: UIState = initialState, action: Action): UIState => {
  switch (action.type) {
    case (ActionType.TOGGLE_LOADING):
      return {
          loading: action.payload
      }
    default:
      return state
  }
}