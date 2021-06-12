import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Creators } from '@app/redux/actions/auth';
import { FullpageSpinner } from '@app/components/Spinner';
import { LOCAL_STORAGE } from '@app/shared/constants';

const AuthPage = () => {
	const dispatch = useDispatch();
	const location = window.location.href;

	const email = window.localStorage.getItem(LOCAL_STORAGE.USER_EMAIL);
	if (email) window.localStorage.removeItem(LOCAL_STORAGE.USER_EMAIL);

	useEffect(() => {
		dispatch(Creators.authTempTokenRequest({ email, location }));
	}, []);

	return <FullpageSpinner />;
};

export default AuthPage;
