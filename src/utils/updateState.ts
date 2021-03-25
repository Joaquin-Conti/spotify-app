import { RootState } from '../state/reducers/rootReducer';


export const updateState = (oldState: RootState, updatedValues: RootState) => {
  return {
    ...oldState,
    ...updatedValues
  }
}