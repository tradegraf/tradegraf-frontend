import { createSelector } from 'reselect';

import { getStateObject } from '../../../utils/common';

import { REDUX_KEY } from '../../../shared/constants';

const reducerKey = REDUX_KEY.DASHBOARD;

export const dashboardSelector = {
	getData: createSelector(
		state => {
			return getStateObject(state, reducerKey, 'dashboard');
		},
		({ data }) => {
			return data;
		},
	),
	getIsPending: createSelector(
		state => {
			return getStateObject(state, reducerKey, 'dashboard');
		},
		({ isPending }) => {
			return isPending;
		},
	),
};
