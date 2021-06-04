import React from 'react';
import LogoImage from '@app/assets/images/logo/tradegraf-white.svg';

import styles from './Logo.module.css';

export default function Logo({ width = '8rem', height }) {
  return (
    <LogoImage
      alt="Tradegraf Logo"
      width={width}
      height={height}
      className={styles.logo}
    />
  );
}
