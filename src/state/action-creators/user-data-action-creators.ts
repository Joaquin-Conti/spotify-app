import axios from 'axios';
import { Action } from './../actions/actions';
import { Dispatch } from 'redux';
import { axiosGetTopArtistsConfig, API_URL } from '../../api/index';
import { ActionType, constants } from './../action-types/action-types';

interface UserInputSelect {
  type: string
  timeTerm: string
}

export const getUserTopData = (userInputSelect: UserInputSelect) => { 
  const { type, timeTerm } = userInputSelect
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.USER_INPUT_SELECTED,
      payload: userInputSelect
    })
    console.log('[getUserTopData]', userInputSelect)
    dispatch({
      type: ActionType.TOGGLE_LOADING,
      payload: true
    })
    try {
      console.log("[getUserTopData] fetching")
      const { data } = await axios.get(`${API_URL}/me/top/${type}?time_range=${timeTerm}`, axiosGetTopArtistsConfig)
      console.log('[ActionCreator]', data)
      dispatch({
        type: ActionType.USER_TOP_DATA_OBTAINED,
        payload: data.items
      })
      dispatch({
        type: ActionType.TOGGLE_LOADING,
        payload: false
      })
    } catch (error) {
      dispatch({
        type: ActionType.TOGGLE_LOADING,
        payload: false
      })
      console.log(error.response)
    }
  }  
}

export const userInputSelected = (userInputSelect: UserInputSelect) => {
  return {
      type: ActionType.USER_INPUT_SELECTED,
      payload: userInputSelect
  }
} 


// ELIMINAR
export const testAction = () => {
  return {
      type: constants.POST_TEST.REQUEST
  }
} 