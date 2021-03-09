import { takeEvery, all, put } from 'redux-saga/effects';

import { Creators } from '../actions/loadingBar';

export default function* errorSagaRoot() {
  yield all([
    takeEvery(action => {
      return /_REQUEST$/.test(action.type);
    }, function* showLoadingBar() {
      yield put (Creators.show());
    }),
    takeEvery(action => {
      return /(_SUCCESS|_FAILURE)$/.test(action.type);
    }, function* hideLoadingBar() {
      yield put(Creators.hide());
    }),
  ]);
}
