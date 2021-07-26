import { atom } from 'recoil';

import { ATOM_KEY } from '@app/shared/constants';

export const exchangeConnectionsAtom = atom({
	key: ATOM_KEY.EXCHANGE_CONNECTIONS,
	default: [],
});
