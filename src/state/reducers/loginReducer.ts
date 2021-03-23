import { Action } from '../actions/actions';
import { ActionType, constants } from './../action-types/action-types';

interface LoginState {
    isLoggedIn: boolean
    authCode: string
    accessToken: string | undefined
    refreshToken: string | undefined
    expiresAt: Date
}

const initialState: LoginState = {
    isLoggedIn: false,
    authCode: '',
    accessToken: '',
    refreshToken: '',
    expiresAt: new Date()
}

export const loginReducer = (state: LoginState = initialState, action: Action): LoginState => {
    switch (action.type) {
        case (ActionType.USER_AUTHORIZED):
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken
            }
        case (ActionType.AUTH_CODE_OBTAINED):
            return {
                ...state,
                authCode: action.payload
            }
        case (ActionType.ACCESS_TOKEN_OBTAINED):
            // console.log('Refresh token: ', action.payload.refresh_token)
            return {
                ...state,
                accessToken: action.payload.access_token,
                refreshToken: action.payload.refresh_token ? action.payload.refresh_token : state.refreshToken,
                expiresAt: action.payload.expires_in,
            }
        // case (ActionType.REFRESH_TOKEN_OBTAINED):
        //     return {
        //         ...state,
        //         refreshToken: action.payload
        //     }
        case (constants.POST_TEST.REQUEST):
            console.log('aca se mando.. #esperando')
            return state
        case (constants.POST_TEST.SUCCESS):
            console.log('aca anduvo..')
            return state
        case (constants.POST_TEST.FAILURE):
            console.log('aca falló..')
            return state
        default:
            return state
    }
}