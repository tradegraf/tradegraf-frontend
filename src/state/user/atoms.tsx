import { atom } from 'recoil';
import Auth from '@aws-amplify/auth';

export const authAtom = atom({
	key: 'authAtom',
	default: '',
});

export const userAtom = atom({
	key: 'userAtom',
	default: Auth.currentAuthenticatedUser()
		.then(user => {
			return user;
		})
		.catch(() => {
			return null;
		}),
	dangerouslyAllowMutability: true,
});
