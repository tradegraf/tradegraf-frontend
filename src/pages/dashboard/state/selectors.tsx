import { selector } from 'recoil';

import { currentBalanceAtom } from './atoms';

export const currentBalanceSelector = selector({
	key: 'currentBalanceSelector', // unique ID (with respect to other atoms/selectors)
	get: ({ get }) => {
		return get(currentBalanceAtom);
	},
});
