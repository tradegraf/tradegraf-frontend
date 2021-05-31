import Image from 'next/image';
import SpinnerSVG from '../../public/assets/logo/logo-spinner.svg';

import styles from './LogoSpinner.module.css';

export default function LogoSpinner() {
  return (
    <div className={styles.container}>
      <SpinnerSVG
        alt="Tradegraf Spinner"
        width={75}
        height={5}
        className={styles.logoLoading}
      />
    </div>
  );
}
