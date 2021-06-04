import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import LogoSpinner from '@app/components/LogoSpinner';
import useStyles from './styles';

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
