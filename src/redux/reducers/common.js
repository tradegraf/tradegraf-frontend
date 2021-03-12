import { createReducer } from 'reduxsauce';

import { Types } from '../actions/common';

export const INITIAL_STATE = {
	getPages: {
		data: [],
		isPending: false,
		error: null,
	},
	getMyPermissions: {
		data: [],
		isPending: false,
		error: null,
	},
	getUserPermissions: {
		data: [],
		isPending: false,
		error: null,
	},
	getRolePermissions: {
		data: [],
		isPending: false,
		error: null,
	},
	getRoles: {
		data: [],
		isPending: false,
		error: null,
	},
	darkMode: {
		data: localStorage.getItem('darkMode') || false,
	},
};

export const getPagesRequest = (state = INITIAL_STATE) => {
	return {
		...state,
		getPages: {
			...INITIAL_STATE.getPages,
			isPending: true,
		},
	};
};

export const getPagesSuccess = (state = INITIAL_STATE, { data }) => {
	return {
		...state,
		getPages: {
			...INITIAL_STATE.getPages,
			data,
			isPending: false,
		},
	};
};

export const getPagesFailure = (state = INITIAL_STATE, { error }) => {
	return {
		...state,
		getPages: {
			...INITIAL_STATE.getPages,
			isPending: false,
			error,
		},
	};
};

export const getMyPermissionsRequest = (state = INITIAL_STATE) => {
	return {
		...state,
		getMyPermissions: {
			...INITIAL_STATE.getMyPermissions,
			isPending: true,
		},
	};
};

export const getMyPermissionsSuccess = (state = INITIAL_STATE, { data }) => {
	return {
		...state,
		getMyPermissions: {
			...INITIAL_STATE.getMyPermissions,
			data,
			isPending: false,
		},
	};
};

export const getMyPermissionsFailure = (state = INITIAL_STATE, { error }) => {
	return {
		...state,
		getMyPermissions: {
			...INITIAL_STATE.getMyPermissions,
			isPending: false,
			error,
		},
	};
};

export const getUserPermissionsRequest = (state = INITIAL_STATE) => {
	return {
		...state,
		getUserPermissions: {
			...INITIAL_STATE.getUserPermissions,
			isPending: true,
		},
	};
};

export const getUserPermissionsSuccess = (state = INITIAL_STATE, { data }) => {
	return {
		...state,
		getUserPermissions: {
			...INITIAL_STATE.getUserPermissions,
			data,
			isPending: false,
		},
	};
};

export const getUserPermissionsFailure = (state = INITIAL_STATE, { error }) => {
	return {
		...state,
		getUserPermissions: {
			...INITIAL_STATE.getUserPermissions,
			isPending: false,
			error,
		},
	};
};

export const getRolePermissionsRequest = (state = INITIAL_STATE) => {
	return {
		...state,
		getRolePermissions: {
			...INITIAL_STATE.getRolePermissions,
			isPending: true,
		},
	};
};

export const getRolePermissionsSuccess = (state = INITIAL_STATE, { data }) => {
	return {
		...state,
		getRolePermissions: {
			...INITIAL_STATE.getRolePermissions,
			data,
			isPending: false,
		},
	};
};

export const getRolePermissionsFailure = (state = INITIAL_STATE, { error }) => {
	return {
		...state,
		getRolePermissions: {
			...INITIAL_STATE.getRolePermissions,
			isPending: false,
			error,
		},
	};
};

export const getRolesRequest = (state = INITIAL_STATE) => {
	return {
		...state,
		getRoles: {
			...INITIAL_STATE.getRoles,
			isPending: true,
		},
	};
};

export const getRolesSuccess = (state = INITIAL_STATE, { data }) => {
	return {
		...state,
		getRoles: {
			...INITIAL_STATE.getRoles,
			data,
			isPending: false,
		},
	};
};

export const getRolesFailure = (state = INITIAL_STATE, { error }) => {
	return {
		...state,
		getRoles: {
			...INITIAL_STATE.getRoles,
			isPending: false,
			error,
		},
	};
};

export const setDarkMode = (state = INITIAL_STATE, { data }) => {
	// eslint-disable-next-line no-console
	console.log(data);
	return {
		...state,
		darkMode: {
			...INITIAL_STATE.darkMode,
			data,
		},
	};
};

export const HANDLERS = {
	[Types.GET_PAGES_REQUEST]: getPagesRequest,
	[Types.GET_PAGES_SUCCESS]: getPagesSuccess,
	[Types.GET_PAGES_FAILURE]: getPagesFailure,
	[Types.GET_MY_PERMISSIONS_REQUEST]: getMyPermissionsRequest,
	[Types.GET_MY_PERMISSIONS_SUCCESS]: getMyPermissionsSuccess,
	[Types.GET_MY_PERMISSIONS_FAILURE]: getMyPermissionsFailure,
	[Types.GET_USER_PERMISSIONS_REQUEST]: getUserPermissionsRequest,
	[Types.GET_USER_PERMISSIONS_SUCCESS]: getUserPermissionsSuccess,
	[Types.GET_USER_PERMISSIONS_FAILURE]: getUserPermissionsFailure,
	[Types.GET_ROLE_PERMISSIONS_REQUEST]: getRolePermissionsRequest,
	[Types.GET_ROLE_PERMISSIONS_SUCCESS]: getRolePermissionsSuccess,
	[Types.GET_ROLE_PERMISSIONS_FAILURE]: getRolePermissionsFailure,
	[Types.GET_ROLES_REQUEST]: getRolesRequest,
	[Types.GET_ROLES_SUCCESS]: getRolesSuccess,
	[Types.GET_ROLES_FAILURE]: getRolesFailure,
	[Types.SET_DARK_MODE]: setDarkMode,
};

export default createReducer(INITIAL_STATE, HANDLERS);
