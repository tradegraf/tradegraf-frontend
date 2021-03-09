import { createActions } from 'reduxsauce';

import { REDUX_KEY } from '../../shared/constants';

const prefix = `${REDUX_KEY.LOADING_BAR}_`;
export const { Types, Creators } = createActions({
  show: null,
  hide: null,
  reset: null,
}, { prefix });
