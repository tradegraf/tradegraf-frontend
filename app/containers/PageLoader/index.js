import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { FullpageSpinner } from '../../components/Spinner';

export const PageLoader = ({ children }) => (
	<Suspense fallback={<FullpageSpinner />}>{children}</Suspense>
);

PageLoader.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
