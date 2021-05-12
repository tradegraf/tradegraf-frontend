import React from 'react';

const Pages = {
	Dashboard: React.lazy(() => import('./dashboard')),
	Landing: React.lazy(() => import('./landing')),
};

export default Pages;
