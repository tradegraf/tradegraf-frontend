import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Space } from 'antd';

import Header from './Header';

import useStyles from './styles';

const AuthModal = ({ visible, handleVisible }) => {
  const [authInput, setAuthInput] = useState('');
  const [currentTab, setCurrentTab] = useState('');

  const classes = useStyles();

  const handleOk = () => {};

  return (
    <Modal
      className={classes.container}
      visible={visible}
      onOk={handleOk}
      onCancel={handleVisible}
      footer={null}
      centered
    >
      <Header />
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

AuthModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleVisible: PropTypes.func.isRequired,
};

export default AuthModal;
