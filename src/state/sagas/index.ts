import { all, fork } from 'redux-saga/effects';

import { rootSaga as testSaga } from './test-saga';

export function* rootSaga() {
  const sagas = [
      testSaga
  ].map(fork);

  yield all(sagas);
}

export default rootSaga;
