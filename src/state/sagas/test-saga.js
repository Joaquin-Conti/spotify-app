import { all, fork, call, put, takeLatest } from 'redux-saga/effects';

import { constants } from '../action-types/action-types';
import * as api from '../api/test-api';

function* addTestExample(action) {
  try {
    let { body } = action;

    console.log('[SAGA]: Request')

    const payload = yield call(api.POST, body);

    console.log('[SAGA]: Success')
    yield put({ type: constants.POST_TEST.SUCCESS, payload });
  } catch (e) {
    console.log('[SAGA]: Failure')
    yield put({
      type: constants.POST_TEST.FAILURE,
      message: e.message || e
    });
  }
}

function* watchAddTestExample() {
  yield takeLatest(constants.POST_TEST.REQUEST, addTestExample);
}

// ---------------

function* getTest(action) {
  try {
    const payload = yield call(api.GET, action.body);

    yield put({ type: constants.GET_TEST.SUCCESS, payload });
  } catch (e) {
    yield put({
      type: constants.GET_TEST.FAILURE,
      message: e.message || e
    });
  }
}

function* watchGetTest() {
  yield takeLatest(constants.GET_TEST.REQUEST, getTest);
}

// ---------------

function* deleteTest(action) {
  try {
    let { body } = action;
    const payload = yield call(api.DELETE, body);
    yield put({ type: constants.DELETE_TEST.SUCCESS, payload });
  } catch (e) {
    yield put({
      type: constants.DELETE_TEST.FAILURE,
      message: e.message || e
    });
  }
}

function* watchDeleteTest() {
  yield takeLatest(constants.DELETE_TEST.REQUEST, deleteTest);
}

// ---------------

function* updateTest(action) {
  try {
    const payload = yield call(api.PUT, action.body);

    yield put({ type: constants.PUT_TEST.SUCCESS, payload });
  } catch (e) {
    yield put({
      type: constants.PUT_TEST.FAILURE,
      message: e.message || e
    });
  }
}

function* watchUpdateTest() {
  yield takeLatest(constants.PUT_TEST.REQUEST, updateTest);
}

// ---------------

/**
 * Export the root saga by forking all available sagas.
 */
export function* rootSaga() {
  yield all([
    fork(watchAddTestExample),
    fork(watchGetTest),
    fork(watchDeleteTest),
    fork(watchUpdateTest)
  ]);
}
