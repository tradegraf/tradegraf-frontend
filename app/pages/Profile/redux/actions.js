import { createActions } from 'reduxsauce';

import { REDUX_KEY } from '@app/shared/constants';

export const { Types, Creators } = createActions(
	{
		getApiDataRequest: {},
		getApiDataSuccess: { data: {} },
		getApiDataFailure: { error: null },
		initPage: null,
		destroyPage: null,
	},
	{ prefix: `${REDUX_KEY.PROFILE}_` },
);
