import axios from 'axios';
import { Dispatch } from 'react';
import { API_URL, axiosGetTopArtistsConfig, axiosTokenReqConfig, accessTokenReqData, refreshTokenReqData, TOKEN_ENDPOINT } from '../../api';
import { ActionType } from '../action-types/action-types';
import { Action } from '../actions/actions';

export interface IUserAuthorizedPayload {
  isLoggedIn: boolean
  accessToken?: string,
  refreshToken?: string,
  expiresAt?: Date,
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
      const { data } = await axios.post(TOKEN_ENDPOINT, accessTokenReqData ,axiosTokenReqConfig)
      data.expires_in = new Date()
      data.expires_in.setHours(data.expires_in.getHours() + 1);
      window.history.pushState({}, '', "/")
      dispatch({
        type: ActionType.ACCESS_TOKEN_OBTAINED,
        payload: data
      })
    } catch (err) {
      dispatch({
        type: ActionType.ERROR,
        payload: 'There was an error authenticating, please try again.'
      })
      localStorage.clear()
      console.log(err.response)
    }
  }
}

export const getRefreshToken = (refreshToken: string | undefined) => {
  return async (dispatch: Dispatch<Action>) => {
    console.log("[RefreshToken Token] fetching")
    try {
      const { data } = await axios.post(TOKEN_ENDPOINT, refreshTokenReqData, axiosTokenReqConfig)
      console.log(data)
      data.expires_in = new Date()
      data.expires_in.setHours(data.expires_in.getHours() + 1);
      dispatch({
        type: ActionType.ACCESS_TOKEN_OBTAINED,
        payload: data
      })
    } catch (err) {
      dispatch({
        type: ActionType.ERROR,
        payload: 'There was an error authenticating, please try again.'
      })
      localStorage.clear()
      console.log(err.response)
    }
  }
}