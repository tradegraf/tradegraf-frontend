import React from 'react';
import { Redirect } from 'react-router-dom';

export const RedirectContainer: React.FC = () => <Redirect to="/" />;
export const RedirectPrivateContainer: React.FC = () => <Redirect to="/dashboard" />;
export const RedirectProfile: React.FC = () => <Redirect to="/profile/overview" />;
