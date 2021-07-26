import React from 'react';
import { Redirect } from 'react-router-dom';

export const RedirectContainer = () => <Redirect to="/" />;
export const RedirectPrivateContainer = () => <Redirect to="/dashboard" />;
