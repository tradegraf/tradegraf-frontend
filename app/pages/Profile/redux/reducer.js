import { createReducer } from 'reduxsauce';

import { Types } from './actions';

export const INITIAL_STATE = {
	apiData: {
		data: null,
		isPending: false,
		error: null,
	},
};

export const getApiDataRequest = (state = INITIAL_STATE) => ({
	...state,
	apiData: {
		...INITIAL_STATE.apiData.data,
		isPending: true,
	},
});

export const getApiDataSuccess = (state = INITIAL_STATE, { data }) => ({
	...state,
	apiData: {
		...INITIAL_STATE.apiData.data,
		isPending: false,
		data,
	},
});

export const getApiDataFailure = (state = INITIAL_STATE, { error }) => ({
	...state,
	apiData: {
		...INITIAL_STATE.apiData.data,
		isPending: false,
		error,
	},
});

export const destroy = () => ({
	...INITIAL_STATE,
});

export const HANDLERS = {
	[Types.GET_API_DATA_REQUEST]: getApiDataRequest,
	[Types.GET_API_DATA_SUCCESS]: getApiDataSuccess,
	[Types.GET_API_DATA_FAILURE]: getApiDataFailure,
	[Types.DESTROY_PAGE]: destroy,
};

export default createReducer(INITIAL_STATE, HANDLERS);
