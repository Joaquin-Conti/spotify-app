import { createSagaAction } from '../sagas/helper';

export enum ActionType {
  //LOGIN
  USER_AUTHORIZED = 'USER_AUTHORIZED',
  AUTH_CODE_OBTAINED = 'AUTH_CODE_OBTAINED',
  ACCESS_TOKEN_OBTAINED = 'ACCESS_TOKEN_OBTAINED',
  REFRESH_TOKEN_OBTAINED = 'REFRESH_TOKEN_OBTAINED',

  //USER DATA
  USER_TOP_DATA_OBTAINED = 'USER_TOP_DATA_OBTAINED',
  USER_INPUT_SELECTED = 'USER_INPUT_SELECTED',

  //UI
  TOGGLE_LOADING = 'TOGGLE_LOADING',

}

export const constants = {
  POST_TEST: createSagaAction('POST_TEST'),
  PUT_TEST: createSagaAction('PUT_TEST'),
  GET_TEST: createSagaAction('GET_TEST'),
  DELETE_TEST: createSagaAction('DELETE_TEST')
}