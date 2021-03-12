import { createActions } from 'reduxsauce';

import { REDUX_KEY } from '../../shared/constants';

export const { Types, Creators } = createActions(
	{
		getPagesRequest: { limit: 10, offset: 0 },
		getPagesSuccess: { data: [] },
		getPagesFailure: { error: null },
		getMyPermissionsRequest: {},
		getMyPermissionsSuccess: { data: [] },
		getMyPermissionsFailure: { error: null },
		getUserPermissionsRequest: { userId: null },
		getUserPermissionsSuccess: { data: [] },
		getUserPermissionsFailure: { error: null },
		getRolePermissionsRequest: { roleId: null },
		getRolePermissionsSuccess: { data: [] },
		getRolePermissionsFailure: { error: null },
		getRolesRequest: { limit: 9999, offset: 0, queryText: '' },
		getRolesSuccess: { data: [] },
		getRolesFailure: { error: null },
		getDarkMode: { data: null },
		setDarkMode: { data: null },
	},
	{ prefix: `${REDUX_KEY.COMMON}_` },
);
