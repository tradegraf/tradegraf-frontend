import { createReducer } from 'reduxsauce';

import { Types } from './actions';

export const INITIAL_STATE = {
	dashboard: {
		data: [],
		isPending: false,
		error: null,
	},
};

export const getDashboardRequest = (state = INITIAL_STATE) => {
	return {
		...state,
		dashboard: {
			...INITIAL_STATE.dashboard,
			isPending: true,
		},
	};
};

export const getDashboardSuccess = (state = INITIAL_STATE, { data, total }) => {
	return {
		...state,
		dashboard: {
			...INITIAL_STATE.dashboard,
			data,
			isPending: false,
		},
	};
};

export const getDashboardFailure = (state = INITIAL_STATE, { error }) => {
	return {
		...state,
		dashboard: {
			...INITIAL_STATE.dashboard,
			isPending: false,
			error,
		},
	};
};

export const destroy = () => {
	return { ...INITIAL_STATE };
};

// eslint-disable-next-line no-console
console.log(Types);
export const HANDLERS = {
	[Types.GET_DASHBOARD_REQUEST]: getDashboardRequest,
	[Types.GET_DASHBOARD_SUCCESS]: getDashboardSuccess,
	[Types.GET_DASHBOARD_FAILURE]: getDashboardFailure,
	[Types.DESTROY_PAGE]: destroy,
};

export default createReducer(INITIAL_STATE, HANDLERS);
