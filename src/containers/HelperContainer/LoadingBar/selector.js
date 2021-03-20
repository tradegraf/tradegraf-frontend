import { createSelector } from 'reselect';

import { REDUX_KEY } from '../../../shared/constants';

const reducerKey = REDUX_KEY.LOADING_BAR;

export const getStatus = createSelector(
  state => state[reducerKey].status,
  status => status
);

export default { getStatus };
