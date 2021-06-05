import React from 'react';
import PropTypes from 'prop-types';

import LogoImage from '@app/assets/images/logo/tradegraf-white.svg';
import styles from './styles/Logo.module.css';

export default function Logo({ width = '8rem', height }) {
  return <LogoImage alt="Tradegraf Logo" width={width} height={height} className={styles.logo} />;
}

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
