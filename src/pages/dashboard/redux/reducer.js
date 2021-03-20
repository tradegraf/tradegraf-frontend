import { createReducer } from 'reduxsauce';

import { Types } from './actions';

export const INITIAL_STATE = {
	dashboard: {
		data: [],
		isPending: false,
		error: null,
	},
};

export const getDashboardRequest = (state = INITIAL_STATE) => ({
		...state,
		dashboard: {
			...INITIAL_STATE.dashboard,
			isPending: true,
		},
	});

export const getDashboardSuccess = (state = INITIAL_STATE, { data, total }) => ({
		...state,
		dashboard: {
			...INITIAL_STATE.dashboard,
			data,
			isPending: false,
		},
	});

export const getDashboardFailure = (state = INITIAL_STATE, { error }) => ({
		...state,
		dashboard: {
			...INITIAL_STATE.dashboard,
			isPending: false,
			error,
		},
	});

export const destroy = () => ({ ...INITIAL_STATE });

export const HANDLERS = {
	[Types.GET_DASHBOARD_REQUEST]: getDashboardRequest,
	[Types.GET_DASHBOARD_SUCCESS]: getDashboardSuccess,
	[Types.GET_DASHBOARD_FAILURE]: getDashboardFailure,
	[Types.DESTROY_PAGE]: destroy,
};

export default createReducer(INITIAL_STATE, HANDLERS);
