import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import SpinnerSVG from '@app/assets/images/spinner/logo-spinner.svg';

import styles from './styles/LogoSpinner.module.css';
import useStyles from './classes';

export const LogoSpinner = () => (
  <div className={styles.container}>
    <SpinnerSVG alt="Tradegraf Spinner" width={40} height={4} className={styles.logoLoading} />
  </div>
);

export const FullpageSpinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <LogoSpinner />
    </div>
  );
};

export const DefaultSpinner = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return <Spin indicator={antIcon} />;
};
