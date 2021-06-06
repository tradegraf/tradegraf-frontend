import { take, call, put, fork, all } from 'redux-saga/effects';

import { login, authTempToken, logout } from '@app/api/auth';
import history from '@app/utils/history';
import { Types } from '@app/redux/actions/auth';
import routes, { INITIAL_ROUTE } from '@app/shared/routes';
import { getUser, getToken } from '@app/redux/selectors/auth';
import { LOCAL_STORAGE } from '@app/shared/constants';
import { clearLocalStorage } from '@app/utils/localStorage';
import { Encrypt, Decrypt } from '@app/utils/encryption';

const setTokenToLocalStorage = token => {
  window.localStorage.setItem(LOCAL_STORAGE.TOKEN, token);
};

const setEmailToLocalStorage = email => {
  window.localStorage.setItem(LOCAL_STORAGE.USER_EMAIL, Encrypt(email));
};

export function* loginRequest() {
  while (true) {
    try {
      const { email } = yield take(Types.LOGIN_REQUEST);
      yield call(login, { email });
      yield setEmailToLocalStorage(email);
      yield put({ type: Types.LOGIN_SUCCESS, email });
    } catch (error) {
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
    } catch (error) {
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
      const { email, location } = yield take(Types.AUTH_TEMP_TOKEN_REQUEST);
      const { user } = yield call(authTempToken, { email: Decrypt(email), location });
      yield put({
        type: Types.AUTH_TEMP_TOKEN_SUCCESS,
        user,
      });
    } catch (error) {
      yield put({
        type: Types.AUTH_TEMP_TOKEN_FAILURE,
        error,
      });
      yield call(history.push, routes.get('LANDING').path);
    }
  }
}

export function* authTempTokenSuccess() {
  while (true) {
    try {
      const { user } = yield take(Types.AUTH_TEMP_TOKEN_SUCCESS);
      yield setTokenToLocalStorage(user);
      yield call(history.push, INITIAL_ROUTE.path);
    } catch (error) {
      yield put({
        type: Types.LOGIN_FAILURE,
        error,
      });
    }
  }
}

export function* logoutRequest() {
  while (true) {
    try {
      yield take(Types.LOGOUT_REQUEST);
      const token = getToken();
      const { uid: userId } = getUser();
      if (userId && token) {
        yield call(logout, { userId, token });
      }
      yield clearLocalStorage();
    } catch (error) {
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
