import { createSelector } from 'reselect';

import { getStateObject } from '../../utils/common';
import { REDUX_KEY } from '../../shared/constants';

const reducerKey = REDUX_KEY.COMMON;

export const darkModeSelector = {
	getDarkMode: createSelector(
		state => getStateObject(state, reducerKey, 'darkMode'),
		({ data }) => data,
    ),
    setDarkMode: createSelector(
      state => getStateObject(state, reducerKey, 'darkMode'),
      ({ data }) => !!data,
	),
};
