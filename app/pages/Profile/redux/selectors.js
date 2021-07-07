import { createSelector } from 'reselect';

import { getStateObject } from '@app/utils/common';
import { REDUX_KEY } from '@app/shared/constants';

const reducerKey = REDUX_KEY.PROFILE;

export const apiDataSelector = {
	getData: createSelector(
		(state) => getStateObject(state, reducerKey, 'apiData'),
		(state) => state.data,
	),
	isPending: createSelector(
		(state) => getStateObject(state, reducerKey, 'apiData'),
		(state) => state.isPending,
	),
};
