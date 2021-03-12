import React from 'react';

export const ContentLayout = ({ children }) => {
	return <div className="overflow-auto h-screen pb-24 px-4 md:px-6">{children}</div>;
};
