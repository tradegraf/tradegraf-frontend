import { createSelector } from 'reselect';

import { getStateObject } from '../../utils/common';
import { REDUX_KEY } from '../../shared/constants';

const reducerKey = REDUX_KEY.COMMON;

export const darkModeSelector = {
	getDarkMode: createSelector(
		state => {
      return getStateObject(state, reducerKey, 'darkMode');
		},
		({ data }) => {
      return data;
		},
    ),
    setDarkMode: createSelector(
      state => {
        return getStateObject(state, reducerKey, 'darkMode');
      },
      ({ data }) => {
				return !!data;
			},
	),
};
