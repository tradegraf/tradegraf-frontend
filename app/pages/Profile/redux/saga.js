import { all, call, cancel, fork, put, take, takeLatest } from 'redux-saga/effects';

import { getApiData } from '@app/api/profile';
import { Types, Creators } from './actions';

function* getApiDataRequest() {
	try {
		const apiData = yield call(getApiData);
		yield put(Creators.getApiDataSuccess({ data: apiData }));
	} catch (error) {
		yield put(Creators.getApiDataFailure({ error }));
	}
}

function* watchApiDataRequest() {
	yield takeLatest(Types.GET_API_DATA_REQUEST, getApiDataRequest);
}

export default function* profilePageRoot() {
	while (yield take(Types.INIT_PAGE)) {
		const backgroundTasks = yield all([fork(watchApiDataRequest)]);

		yield take(Types.DESTROY_PAGE);
		yield cancel(backgroundTasks);
	}
}
