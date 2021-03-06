import { Action } from '../actions/actions';
import { ActionType } from './../action-types/action-types';

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
        default:
            return state
    }
}