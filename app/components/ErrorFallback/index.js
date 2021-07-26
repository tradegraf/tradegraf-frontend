import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

const ErrorFallback = ({ error }) => (
	<div role="alert">
		<Alert message="Something went wrong:" description={error.message} type="error" showIcon />
	</div>
);

ErrorFallback.propTypes = {
	error: {
		message: PropTypes.string.isRequired,
	}.isRequired,
};

export default ErrorFallback;
