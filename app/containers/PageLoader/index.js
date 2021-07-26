/* eslint-disable react/prop-types */
import React, { Suspense } from 'react';

import { FullpageSpinner } from '../../components/Spinner';

export const PageLoader = ({ children }) => (
	<Suspense fallback={<FullpageSpinner />}>{children}</Suspense>
);
