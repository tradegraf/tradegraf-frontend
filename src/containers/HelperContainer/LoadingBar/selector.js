import { createSelector } from 'reselect';

import { REDUX_KEY } from '../../../shared/constants';

const reducerKey = REDUX_KEY.LOADING_BAR;

export const getStatus = createSelector(
  state => {
    return state[reducerKey].status;
  },
  status => {
    return status;
  }
);

export default { getStatus };
