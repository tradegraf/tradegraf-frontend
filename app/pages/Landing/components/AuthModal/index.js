import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Modal } from 'antd';

import { getIsLoginSuccess } from '@app/redux/selectors/auth';

import { LogoSpinner } from '@app/components/Spinner';
import Header from './Header';
import AuthForm from './AuthForm';
const PostAuth = lazy(() => import(/* webpackPrefetch: true */ './PostAuth'));

const AuthModal = ({ visible, handleVisible }) => {
  const handleOk = () => {};

  const isLoginSuccess = useSelector(getIsLoginSuccess);

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
      {isLoginSuccess ? (
        <Suspense fallback={<LogoSpinner />}>
          <PostAuth />
        </Suspense>
      ) : (
        <AuthForm />
      )}
    </Modal>
  );
};

AuthModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleVisible: PropTypes.func.isRequired,
};

export default AuthModal;
