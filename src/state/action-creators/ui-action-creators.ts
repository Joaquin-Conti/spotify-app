import { ActionType } from '../action-types/action-types';

export const toggleLoading = (loading: boolean) => {
  return {
    type: ActionType.TOGGLE_LOADING,
    payload: loading
  }
}
