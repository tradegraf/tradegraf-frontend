import { take, call, put, fork, all } from 'redux-saga/effects';

import { login, authTempToken, logout } from '../../api/auth';
import history from '../../utils/history';
import { Types } from '../actions/auth';
import { INITIAL_ROUTE } from '../../routes';
import { getToken, getUser } from '../selectors/auth';
import { clearLocalStorage } from '../../utils/localStorage';

const setTokenToLocalStorage = token => {
  localStorage.setItem('token', token);
};

const setUserToLocalStorage = user => {
  localStorage.setItem('user', JSON.stringify(user));
};

export function* loginRequest() {
  while (true) {
    try {
      const { email } = yield take(Types.LOGIN_REQUEST);
      yield call(login, { email });
      yield put({ type: Types.LOGIN_SUCCESS });
    }
    catch (error) {
      yield put({
        type: Types.LOGIN_FAILURE,
        error,
      });
    }
  }
}

export function* loginSuccess() {
  while (true) {
    try {
      yield take(Types.LOGIN_SUCCESS);
    }
    catch (error) {
      yield put({
        type: Types.LOGIN_FAILURE,
        error,
      });
    }
  }
}

export function* authTempTokenRequest() {
  while (true) {
    try {
      const { tempToken } = yield take(Types.AUTH_TEMP_TOKEN_REQUEST);
      const { token, ...user } = yield call(authTempToken, { tempToken });
      yield put({
        type: Types.AUTH_TEMP_TOKEN_SUCCESS,
        user,
        token,
      });
    }
    catch (error) {
      yield put({
        type: Types.LOGIN_FAILURE,
        error,
      });
    }
  }
}

export function* authTempTokenSuccess() {
  while (true) {
    try {
      const { token, user } = yield take(Types.AUTH_TEMP_TOKEN_SUCCESS);
      yield setTokenToLocalStorage(token);
      yield setUserToLocalStorage(user);

      yield call(history.push, INITIAL_ROUTE.path);
    }
    catch (error) {
      yield put({
        type: Types.LOGIN_FAILURE,
        error,
      });
    }
  }
}

export function* logoutRequest() {
  while (true) {
    // eslint-disable-next-line no-useless-catch
    try {
      yield take(Types.LOGOUT_REQUEST);
      const token = getToken();
      const { _id: userId } = getUser();
      if (userId && token) {
        yield call(logout, { userId, token });
      }
      yield clearLocalStorage();
    }
    catch (error) {
      throw error;
    }
  }
}

export default function* auth() {
  yield all([
    fork(loginRequest),
    fork(loginSuccess),
    fork(authTempTokenRequest),
    fork(authTempTokenSuccess),
    fork(logoutRequest),
  ]);
}
