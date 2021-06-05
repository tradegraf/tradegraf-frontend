import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

import Header from './Header';
import AuthForm from './AuthForm';

const AuthModal = ({ visible, handleVisible }) => {
  const handleOk = () => {};

  return (
    <Modal
      width={320}
      visible={visible}
      onOk={handleOk}
      onCancel={handleVisible}
      footer={null}
      bodyStyle={{ backgroundColor: '#191919' }}
      mask={false}
      centered
    >
      <Header />
      <AuthForm />
    </Modal>
  );
};

AuthModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleVisible: PropTypes.func.isRequired,
};

export default AuthModal;
