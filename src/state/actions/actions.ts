import { ActionType } from './../action-types/action-types';

interface UserAuthorizedAction {
    type: ActionType.USER_AUTHORIZED
    payload: boolean
}

interface AuthCodeObtainedAction {
    type: ActionType.AUTH_CODE_OBTAINED
    payload: string
}

interface AccessTokenObtainedAction {
    type: ActionType.ACCESS_TOKEN_OBTAINED
    payload: string
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

export type Action = UserAuthorizedAction | AuthCodeObtainedAction | AccessTokenObtainedAction | RefreshTokenObtainedAction | UserTopDataObtainedAction | UserInputSelectedAction | ToggleLoadingAction