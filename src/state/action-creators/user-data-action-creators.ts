import axios from 'axios';
import { Action } from './../actions/actions';
import { Dispatch } from 'redux';
import { axiosGetTopArtistsConfig, API_URL } from '../../api/index';
import { ActionType, constants, ErrorTypes } from './../action-types/action-types';

interface UserInputSelect {
  type: string
  timeTerm: string
}

export const getUserProfileInfo = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get(`${API_URL}/me`, axiosGetTopArtistsConfig)
      dispatch({
        type: ActionType.USER_PROFILE_INFO_OBTAINED,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ActionType.ERROR,
        payload: {
          errorType: ErrorTypes.ERROR_USER_PROFILE_INFO,
          message: 'There was an error obtaining your profile.'
      }})
      console.log(error.response)
    }
  }
}

export const getUserTopData = (userInputSelect: UserInputSelect, expiresIn: Date) => { 
  const { type, timeTerm } = userInputSelect
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ERROR,
      payload: null
    })
    // console.log('[getUserTopData]', userInputSelect)
    dispatch({
      type: ActionType.TOGGLE_LOADING,
      payload: true
    })

    try {
      dispatch({
        type: ActionType.USER_TOP_DATA_OBTAINED,
        payload: []
      })
      // console.log("[getUserTopData] fetching")
      const { data } = await axios.get(`${API_URL}/me/top/${type}?time_range=${timeTerm}`, axiosGetTopArtistsConfig)
      // console.log('[ActionCreator]', data)
      dispatch({
        type: ActionType.USER_TOP_DATA_OBTAINED,
        payload: data.items
      })
      dispatch({
        type: ActionType.TOGGLE_LOADING,
        payload: false
      })
    } catch (error) {
      localStorage.clear()
      dispatch({
        type: ActionType.TOGGLE_LOADING,
        payload: false
      })
      console.log(error.response)
      dispatch({
        type: ActionType.ERROR,
        payload: {
          errorType: ErrorTypes.ERROR_USER_TOP_DATA,
          message: "Something went wrong and we couldn't get your data. Please try re-logging in."
      }})
    }
  }  
}

export const userInputSelected = (userInputSelect: UserInputSelect) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ERROR,
      payload: null
    })
    dispatch({
      type: ActionType.USER_TOP_DATA_OBTAINED,
      payload: []
    })
    try {
        dispatch({
          type: ActionType.USER_INPUT_SELECTED,
          payload: userInputSelect
        })
    } catch (error) {
      localStorage.clear()
      console.log(error.response)
      dispatch({
        type: ActionType.ERROR,
        payload: {
          errorType: ErrorTypes.ERROR_USER_TOP_DATA,
          message: "Something went wrong and we couldn't get your data. Please try re-logging in."
      }})
    }
  }
} 


// ELIMINAR
export const testAction = () => {
  return {
      type: constants.POST_TEST.REQUEST
  }
} 