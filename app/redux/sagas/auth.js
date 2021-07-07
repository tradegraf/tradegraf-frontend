import { take, call, put, fork, cancel, all, takeLatest } from 'redux-saga/effects';

import { login, authTempToken, logout } from '@app/api/auth';
import history from '@app/utils/history';
import { Types } from '@app/redux/actions/auth';
import routes, { INITIAL_ROUTE } from '@app/shared/routes';
import { getUser, getToken } from '@app/redux/selectors/auth';
import { LOCAL_STORAGE, AUTH_ERRORS } from '@app/shared/constants';
import { clearLocalStorage } from '@app/utils/localStorage';
import { Encrypt } from '@app/utils/encryption';

const setTokenToLocalStorage = (token) => {
	window.localStorage.setItem(LOCAL_STORAGE.TOKEN, token);
};

const setEmailToLocalStorage = (email) => {
	localStorage.setItem(LOCAL_STORAGE.USER_EMAIL, Encrypt(email));
};

export function* loginRequest() {
	while (true) {
		try {
			const { email } = yield take(Types.LOGIN_REQUEST);
			yield call(login, { email });
			yield call(setEmailToLocalStorage, email);
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

export function* authTempTokenRequest({ data }) {
	try {
		console.log('{ email, location }', data);
		if (data?.email) {
			const user = yield call(authTempToken, data);
			localStorage.removeItem(LOCAL_STORAGE.USER_EMAIL);
			yield put({
				type: Types.AUTH_TEMP_TOKEN_SUCCESS,
				user,
			});
		} else {
			throw new Error(AUTH_ERRORS.EMAIL_NOT_FOUND);
		}
	} catch (error) {
		yield put({
			type: Types.AUTH_TEMP_TOKEN_FAILURE,
			error,
		});
		yield call(history.push, routes.get('LANDING').path);
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
			yield put({
				type: Types.LOGIN_FAILURE,
				error,
			});
		}
	}
}

function* watchAuthTempTokenRequest() {
	yield takeLatest(Types.AUTH_TEMP_TOKEN_REQUEST, authTempTokenRequest);
}

export default function* auth() {
	while (yield take(Types.INIT_PAGE)) {
		const backgroundTasks = yield all([
			fork(loginRequest),
			fork(loginSuccess),
			fork(watchAuthTempTokenRequest),
			fork(authTempTokenSuccess),
			fork(logoutRequest),
		]);
		yield take(Types.DESTROY_PAGE);
		yield cancel(backgroundTasks);
	}
}
