import { atom } from 'recoil';
import Auth from '@aws-amplify/auth';

interface authKeys {
  username: string;
  password: string;
}

export const authAtom = atom({
  key: 'authAtom',
  default: null as authKeys | null,
});

export const userAtom = atom({
  key: 'userAtom',
  default: Auth.currentAuthenticatedUser()
    .then(({ signInUserSession }) => signInUserSession)
    .catch(() => null),
  dangerouslyAllowMutability: true,
});
