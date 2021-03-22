import { IUserAuthorizedPayload } from './../action-creators/login-action-creators';
import { ActionType } from './../action-types/action-types';

interface UserAuthorizedAction {
    type: ActionType.USER_AUTHORIZED
    payload: IUserAuthorizedPayload
}

interface UserLogoutAction {
    type: ActionType.USER_LOGOUT
    payload: any
}

interface UserProfileInfoObtainedAction {
    type: ActionType.USER_PROFILE_INFO_OBTAINED
    payload: any
}

interface AuthCodeObtainedAction {
    type: ActionType.AUTH_CODE_OBTAINED
    payload: string
}

interface AccessTokenObtainedAction {
    type: ActionType.ACCESS_TOKEN_OBTAINED
    payload: any
}

interface RefreshTokenObtainedAction {
    type: ActionType.REFRESH_TOKEN_OBTAINED
    payload: string
}

interface UserTopDataObtainedAction {
    type: ActionType.USER_TOP_DATA_OBTAINED
    payload: string[] // MAY BE WRONG
}

interface UserInputSelectedAction {
    type: ActionType.USER_INPUT_SELECTED
    payload: {
        type: string
        timeTerm: string
    }
}

interface ToggleLoadingAction {
    type: ActionType.TOGGLE_LOADING
    payload: boolean
}

interface ErrorAction {
    type: ActionType.ERROR
    payload: any
}



export type Action = UserAuthorizedAction | UserLogoutAction | UserProfileInfoObtainedAction | AuthCodeObtainedAction | AccessTokenObtainedAction | RefreshTokenObtainedAction | UserTopDataObtainedAction | UserInputSelectedAction | ToggleLoadingAction | ErrorAction