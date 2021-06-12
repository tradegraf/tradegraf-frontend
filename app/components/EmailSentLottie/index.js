import React from 'react';
import Lottie from 'lottie-react';
import PropTypes from 'prop-types';
import animationData from '@app/assets/lotties/email-notification.json';

const EmailSentLottie = ({ width = 175, height = 175 }) => (
	<Lottie animationData={animationData} width={width} height={height} />
);

EmailSentLottie.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};

export default EmailSentLottie;
