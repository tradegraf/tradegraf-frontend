import { createActions } from 'reduxsauce';

import { REDUX_KEY } from '../../shared/constants';

export const { Types, Creators } = createActions(
  { setSelectedLanguage: { selectedLanguage: null } },
  { prefix: `${REDUX_KEY.LANGUAGE_SELECTION}_` },
);
