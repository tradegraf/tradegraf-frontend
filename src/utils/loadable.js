import React from 'react';
import loadable from '@loadable/component';

import Spinner from '../components/Spinner';
import EmptyDiv from '../components/EmptyDiv';

import { SPINNER } from '../shared/constants';

const Loadable = (importFunction, spinnerType = SPINNER.DEFAULT, options) => {
	let fallback;
	switch (spinnerType) {
		case SPINNER.DEFAULT:
			fallback = <Spinner />;
			break;
		case SPINNER.EMPTY:
			fallback = <EmptyDiv />;
			break;
		default:
			fallback = <Spinner />;
			break;
	}
	const newOptions = {
		fallback,
		...options,
	};
	return loadable(importFunction, newOptions);
};

export default Loadable;
