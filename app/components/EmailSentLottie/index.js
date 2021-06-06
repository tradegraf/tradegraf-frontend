import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import animationData from '@app/assets/lotties/email-notification.json';

const EmailSentLottie = ({ isStopped, width = 175, height = 175 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} width={width} height={height} isStopped={isStopped} />;
};

EmailSentLottie.propTypes = {
  isStopped: PropTypes.bool.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default EmailSentLottie;
