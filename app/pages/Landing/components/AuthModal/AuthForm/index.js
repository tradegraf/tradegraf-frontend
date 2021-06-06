import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Form, Row, Button, Input } from 'antd';

import { getIsLoginPending } from '@app/redux/selectors/auth';
import { Creators } from '@app/redux/actions/auth';
import { ArrowRightOutlined } from '@ant-design/icons';

import useStyles from './styles';

const AuthForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const isLoginRequestPending = useSelector(getIsLoginPending);

  const classes = useStyles();
  const emailRef = useRef();

  const formLayout = {
    layout: 'vertical',
  };

  const onFinish = ({ email }) => {
    dispatch(Creators.loginRequest({ email }));
  };

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
          loading={isLoginRequestPending}
        />
      </Row>
    </Form>
  );
};

export default AuthForm;
