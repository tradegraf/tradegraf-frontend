import { createSelector } from 'reselect';

import { getStateObject } from '../../../utils/common';

import { REDUX_KEY } from '../../../shared/constants';

const reducerKey = REDUX_KEY.DASHBOARD;

export const dashboardSelector = {
	getData: createSelector(
		state => getStateObject(state, reducerKey, 'dashboard'),
		({ data }) => data,
	),
	getIsPending: createSelector(
		state => getStateObject(state, reducerKey, 'dashboard'),
		({ isPending }) => isPending,
	),
};
