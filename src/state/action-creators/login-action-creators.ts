import { toggleLoading } from './ui-action.creators';
import axios from 'axios';
import { Dispatch } from 'react';
import { axiosTokenReqConfig, data as reqData, TOKEN_ENDPOINT } from '../../api';
import { ActionType } from '../action-types/action-types';
import { Action } from '../actions/actions';


export const userAuthorized = (payload: boolean) => {
  return {
      type: ActionType.USER_AUTHORIZED,
      payload: payload
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
    console.log("[Access Token]")
    try {
      const { data } = await axios.post(TOKEN_ENDPOINT, reqData ,axiosTokenReqConfig)
      dispatch({
        type: ActionType.ACCESS_TOKEN_OBTAINED,
        payload: data.access_token
      })
    } catch (err) {
      console.log(err.response)
    }
  }
}

export const getRefreshToken = (refreshToken: string) => {
  // return async (dispatch: Dispatch<Action>) => {
  //   try {
  //     axios.post(TOKEN_ENDPOINT, data ,axiosTokenReqConfig)
  //       .then(res => {
  //           console.log("[Login] Token Response", res.data)
  //           dispatch(setAccessToken(res.data.access_token))
  //           dispatch(setRefreshToken(res.data.refresh_token))
  //       })
  //       .catch(err => console.log("[Login] TOKEN POST ERROR", err.response))
  //   } catch (err) {
  //     console.log(err.message)
  //   }
  // }
  return {
      type: ActionType.REFRESH_TOKEN_OBTAINED,
      payload: refreshToken
  }
}