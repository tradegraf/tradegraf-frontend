import { atom } from 'recoil';
import Auth from '@aws-amplify/auth';

export const authAtom = atom({
  key: 'authAtom',
  default: '',
});

export const userAtom = atom({
  key: 'userAtom',
  default: Auth.currentAuthenticatedUser()
    .then(({ signInUserSession }) => signInUserSession)
    .catch(() => null),
  dangerouslyAllowMutability: true,
});
