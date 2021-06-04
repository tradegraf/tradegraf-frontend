import React from 'react';
import SpinnerSVG from '@app/assets/images/spinner/logo-spinner.svg';

import styles from './LogoSpinner.module.css';

export default function LogoSpinner() {
  return (
    <div className={styles.container}>
      <SpinnerSVG alt="Tradegraf Spinner" width={40} height={4} className={styles.logoLoading} />
    </div>
  );
}
