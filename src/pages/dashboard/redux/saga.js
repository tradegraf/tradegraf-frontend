import { all, call, cancel, fork, put, take, takeLatest } from 'redux-saga/effects';

import { getDashboard } from '../../../api/dashboard';
// import { Creators as ToastCreators } from '../../../redux/actions/toast';

import { Types, Creators } from './actions';

function* getDashboardRequest() {
	try {
		const { dashboard: data } = yield call(getDashboard);
		yield put(Creators.getDashboardSuccess({ data }));
	} catch (error) {
		yield put(Creators.getDashboardFailure({ error }));
		// yield put(ToastCreators.error({ error }));
	}
}

function* watchDashboardRequests() {
	yield takeLatest(Types.GET_DASHBOARD_REQUEST, getDashboardRequest);
}

export default function* DashboardRoot() {
	while (yield take(Types.INIT_PAGE)) {
		const backgroundTasks = yield all([fork(watchDashboardRequests)]);

		yield take(Types.DESTROY_PAGE);
		yield cancel(backgroundTasks);
	}
}
