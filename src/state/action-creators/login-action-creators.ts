import axios from 'axios';
import { Dispatch } from 'react';
import { API_URL, axiosGetTopArtistsConfig, axiosTokenReqConfig, data as reqData, TOKEN_ENDPOINT } from '../../api';
import { ActionType } from '../action-types/action-types';
import { Action } from '../actions/actions';

export interface IUserAuthorizedPayload {
  isLoggedIn: boolean
  accessToken?: string,
  refreshToken?: string
}

export const userAuthorized = (isAuthorized: boolean) => {
  let payload: IUserAuthorizedPayload = {
    isLoggedIn: true
  }
  if (!isAuthorized) {
    payload = {
      isLoggedIn: false,
      accessToken: '',
      refreshToken: ''
    }
  }
  return {
      type: ActionType.USER_AUTHORIZED,
      payload: payload
  }
}

export const getUserProfileInfo = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get(`${API_URL}/me`, axiosGetTopArtistsConfig)
      console.log(data)
      dispatch({
        type: ActionType.USER_PROFILE_INFO_OBTAINED,
        payload: data
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export const authCodeObtained = (authCode: string) => {
  return {
      type: ActionType.AUTH_CODE_OBTAINED,
      payload: authCode
  }
}


export const getAccessToken = () => {
  return async (dispatch: Dispatch<Action>) => {
    console.log("[Access Token] fetching")
    try {
      const { data } = await axios.post(TOKEN_ENDPOINT, reqData ,axiosTokenReqConfig)
      dispatch({
        type: ActionType.ACCESS_TOKEN_OBTAINED,
        payload: data.access_token
      })
      dispatch({ 
        type: ActionType.REFRESH_TOKEN_OBTAINED,
        payload: data.refreshToken
      })
    } catch (err) {
      console.log(err.response)
    }
  }
}

export const getRefreshToken = () => {
  return async (dispatch: Dispatch<Action>) => {
    console.log("[RefreshToken Token] fetching")
    try {
      const { data } = await axios.post(TOKEN_ENDPOINT, reqData ,axiosTokenReqConfig)
      console.log(data)
      dispatch({
        type: ActionType.ACCESS_TOKEN_OBTAINED,
        payload: data.access_token
      })
      dispatch({ 
        type: ActionType.REFRESH_TOKEN_OBTAINED,
        payload: data.refresh_token
      })
    } catch (err) {
      console.log(err.response)
    }
  }
}