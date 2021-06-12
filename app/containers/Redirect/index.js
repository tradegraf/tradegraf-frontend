import React from 'react';
import { Redirect } from 'react-router-dom';

export const RedirectContainer = () => {
	return <Redirect to="/" />;
};
export const RedirectPrivateContainer = () => {
	return <Redirect to="/dashboard" />;
};
