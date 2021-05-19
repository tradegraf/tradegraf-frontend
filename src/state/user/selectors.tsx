/* eslint-disable @typescript-eslint/ban-types */
import { selector } from 'recoil';

import { authAtom, userAtom } from './atoms';

export const authSelector = selector({
  key: 'authSelector',
  get: ({ get }) => {
    return get(authAtom);
  },
});

export const userSelector = selector({
  key: 'userSelector',
  get: async ({ get }) => {
    await get(userAtom);
  },
});
