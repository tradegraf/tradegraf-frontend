import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Creators } from '@app/redux/actions/auth';
import { FullpageSpinner } from '@app/components/Spinner';
import { getTempUserMail } from '@app/redux/selectors/auth';
import { INITIAL_ROUTE } from '@app/shared/routes';

const AuthPage = () => {
	const dispatch = useDispatch();

	const email = useSelector(getTempUserMail);
	const location = window.location.href;

	useEffect(() => {
		if (email) {
			dispatch(Creators.authTempTokenRequest({ data: { email, location } }));
		}
	}, [dispatch, email, location]);

	return email ? <FullpageSpinner /> : <Redirect to={INITIAL_ROUTE} />;
};

export default AuthPage;
