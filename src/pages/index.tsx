import React from 'react';

const Pages = {
	Dashboard: React.lazy(() => import('./dashboard')),
	Landing: React.lazy(() => import('./landing')),
	Login: React.lazy(() => import('./login')),
};

export default Pages;
