import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import animationData from '@app/assets/lotties/email-notification.json';

const EmailNotification = ({ isStopped }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={200} width={200} isStopped={isStopped} />;
};

EmailNotification.propTypes = {
  isStopped: PropTypes.bool.isRequired,
};

export default EmailNotification;
