import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Row, Button, Input } from 'antd';

import { ArrowRightOutlined } from '@ant-design/icons';
import getFirebase, { actionCodeSettings } from '@app/config/firebase';
import { AUTH_STATUS } from '@app/utils/constants';

import useStyles from './styles';

const AuthForm = () => {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const classes = useStyles();
  const emailRef = useRef();
  const firebaseInstance = getFirebase();

  const formLayout = {
    layout: 'vertical',
  };

  const onFinish = ({ email }) => {
    if (firebaseInstance && email)
      firebaseInstance
        .auth()
        .sendSignInLinkToEmail(email, actionCodeSettings)
        .then(() => {
          setStatus(AUTH_STATUS.EMAIL_SENT);
          window.localStorage.setItem('ue', email);
        })
        .catch(err => {
          const errorCode = err.code;
          const errorMessage = err.message;
          setStatus(AUTH_STATUS.ERROR);
          setError({ errorCode, errorMessage });
        });
  };

  console.log('actionCodeSettings', actionCodeSettings);

  console.log('status', status);
  console.log('error', error);

  const onFinishFailed = () => {
    emailRef.current.focus();
  };

  return (
    <Form
      {...formLayout}
      form={form}
      name="auth"
      initialValues={{
        email: '',
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className={classes.container}
    >
      <Form.Item
        name="email"
        label={t('global:EMAIL')}
        rules={[
          {
            type: 'email',
            message: t('error:INVALID_EMAIL'),
          },
          {
            required: true,
            message: t('error:EMAIL_REQUIRED'),
          },
        ]}
      >
        <Input placeholder={t('authPage:EMAIL_PLACEHOLDER')} ref={emailRef} />
      </Form.Item>
      <Row justify="end">
        <Button
          type="primary"
          htmlType="submit"
          shape="circle"
          icon={<ArrowRightOutlined />}
          size="large"
        />
      </Row>
    </Form>
  );
};

export default AuthForm;
