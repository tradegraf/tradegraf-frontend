import authAxios from '@app/axios/auth';
import axios from '@app/axios/common';
import getFirebase, { actionCodeSettings } from '@app/config/firebase';

import { AUTH_ERRORS } from '@app/shared/constants';

const firebaseInstance = getFirebase();

export const login = ({ email }) => {
  if (firebaseInstance)
    firebaseInstance
      .auth()
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => email)
      .catch(err => {
        const errorCode = err.code;
        const errorMessage = err.message;

        throw new Error({ errorCode, errorMessage });
      });
};

// export const authTempToken = ({ tempToken }) =>
//   authAxios({
//     method: 'POST',
//     url: '/login/authTempToken',
//     data: { tempToken },
//   }).then(response => response.data);

export const authTempToken = ({ location, email }) => {
  if (firebaseInstance.auth().isSignInWithEmailLink(location)) {
    if (!email) throw new Error(AUTH_ERRORS.EMAIL_NOT_FOUND);

    firebaseInstance
      .auth()
      .signInWithEmailLink(email, location)
      .then(res => res)
      .catch(err => {
        throw new Error(AUTH_ERRORS.UNKNOWN + err);
      });
  }
};

export const logout = ({ userId: user, token }) =>
  axios({
    method: 'POST',
    url: '/logout',
    headers: { user, token },
    data: {},
  }).then(response => response.data);
