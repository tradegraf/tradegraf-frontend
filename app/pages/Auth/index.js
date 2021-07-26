import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { FullpageSpinner } from '@app/components/Spinner';
import { useAuth } from '@app/shared/hooks/useAuth';

import { INITIAL_ROUTE } from '@app/shared/routes';
import { getEmailFromLocalStorage } from '@app/utils/localStorage';

const AuthPage = () => {
	const { signInWithEmailLink } = useAuth();

	const email = getEmailFromLocalStorage();
	const location = window.location.href;

	useEffect(() => {
		if (email) {
			signInWithEmailLink({ email, location });
		}
	}, [email, location, signInWithEmailLink]);

	return email ? <FullpageSpinner /> : <Redirect to={INITIAL_ROUTE} />;
};

export default AuthPage;
