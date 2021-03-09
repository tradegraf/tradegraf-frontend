import { all, fork } from 'redux-saga/effects';

import loadingBar from './loadingBar';
import auth from './auth';

export default function* root() {
  yield all([
    fork(loadingBar),
    fork(auth),
  ]);
}
