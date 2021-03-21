/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';

import {
	getIsLoginPending,
	getIsAuthTempTokenPending,
	getIsLoginSuccess,
} from '../../redux/selectors/auth';
import { Creators } from '../../redux/actions/auth';

import Spinner from '../../components/Spinner';
import { Logo } from '../../components/Atoms/Logo';

import { validationSchema, defaultValues } from './formHelper';

const LoginPage = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const isLoginSuccess = useSelector(getIsLoginSuccess);
	const isLoginPending = useSelector(getIsLoginPending);
	const isAuthTempTokenPending = useSelector(getIsAuthTempTokenPending);

	useEffect(() => {
		let tempToken = '';
		if (location.search.includes('?authTempToken=')) {
			tempToken = location.search.replace('?authTempToken=', '');
		}
		// if (tempToken && !isAuthTempTokenPending) {
		// 	dispatch(Creators.authTempTokenRequest({ tempToken }));
		// }
	}, []);

	const formik = useFormik({
		initialValues: defaultValues,
		validationSchema,
		onSubmit: values => {
			handleLoginButtonClick(values);
		},
	});

	const handleLoginButtonClick = ({ email }) => {
		dispatch(Creators.loginRequest({ email }));
	};

	const { handleSubmit, handleChange, values, errors, touched } = formik;

	if (isLoginPending || isAuthTempTokenPending) {
		return <Spinner />;
	}

	return (
		<>
			<div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div>
						<Logo darkMode classString="flex w-48 md:w-52 mx-auto" href="/" />
					</div>
					<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
						<input type="hidden" name="remember" value="true" />
						<div className="shadow-sm -space-y-px">
							<div>
								<label htmlFor="email-address" className="sr-only">
									Email address
								</label>
								<input
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="appearance-none relative block w-full px-3 py-2 border-b-2 border-gray-700 placeholder-gray-500 text-gray-50 bg-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Email address"
								/>
							</div>
							<div>
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="appearance-none relative block w-full px-3 py-2 border-b border-gray-700 placeholder-gray-500 text-gray-50 bg-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Password"
								/>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember_me"
									name="remember_me"
									type="checkbox"
									className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
								/>
								<label
									htmlFor="remember_me"
									className="ml-2 block text-sm text-gray-300 hover:text-gray-50 focus:text-gray-50 select-none"
								>
									Remember me
								</label>
							</div>
							<div className="text-sm">
								<a href="/" className="font-medium text-gray-200 hover:text-gray-50">
									Forgot your password?
								</a>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-2 px-4 text-sm text-gray-50 font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
							>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
