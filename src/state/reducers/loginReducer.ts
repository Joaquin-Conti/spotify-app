import { Action } from '../actions/actions';
import { ActionType, constants } from './../action-types/action-types';

interface LoginState {
    isLoggedIn: boolean
    authCode: string
    accessToken: string
    refreshToken: string
}

const initialState: LoginState = {
    isLoggedIn: false,
    authCode: '',
    accessToken: '',
    refreshToken: ''
}

export const loginReducer = (state: LoginState = initialState, action: Action): LoginState => {
    switch (action.type) {
        case (ActionType.USER_AUTHORIZED):
            return {
                ...state,
                isLoggedIn: action.payload
            }
        case (ActionType.AUTH_CODE_OBTAINED):
            return {
                ...state,
                authCode: action.payload
            }
        case (ActionType.ACCESS_TOKEN_OBTAINED):
            return {
                ...state,
                accessToken: action.payload
            }
        case (ActionType.REFRESH_TOKEN_OBTAINED):
            return {
                ...state,
                refreshToken: action.payload
            }
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