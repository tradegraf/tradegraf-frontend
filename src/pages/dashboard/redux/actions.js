import { createActions } from 'reduxsauce';

import { REDUX_KEY } from '../../../shared/constants';

export const { Types, Creators } = createActions(
	{
		getDashboardRequest: {},
		getDashboardSuccess: { data: [] },
		getDashboardFailure: { error: null },
		initPage: null,
		destroyPage: null,
	},
	{ prefix: `${REDUX_KEY.DASHBOARD}_` },
);
