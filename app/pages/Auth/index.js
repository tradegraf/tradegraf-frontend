import React from 'react';

import getFirebase from '@app/config/firebase';
import { AUTH_STATUS } from '@app/utils/constants';

const AuthPage = () => {
  const location = window.location.href;

  const firebaseInstance = getFirebase();

  if (firebaseInstance.auth().isSignInWithEmailLink(location)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    const email = window.localStorage.getItem('_ue');
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      return AUTH_STATUS.ERROR;
    }
    // The client SDK will parse the code from the link for you.
    firebaseInstance
      .auth()
      .signInWithEmailLink(email, location)
      .then(result => {
        window.localStorage.removeItem('_ue');
        console.log(result);
        return AUTH_STATUS.SUCCESS;
      })
      .catch(
        AUTH_STATUS.ERROR,
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      );
  }

  return <div />;
};

export default AuthPage;
