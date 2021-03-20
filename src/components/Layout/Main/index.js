import React from 'react';

export const MainLayout = ({ theme = 'light', children }) => (
		<div className={theme}>
			<main className="bg-gray-100 dark:bg-gray-800 relative h-screen overflow-hidden relative">
				{children}
			</main>
		</div>
	);
