import Image from 'next/image';
import LogoImage from '../../public/assets/logo/tradegraf-white.svg';

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
