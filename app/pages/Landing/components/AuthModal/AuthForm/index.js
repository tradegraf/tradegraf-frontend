import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Row, Button, Input } from 'antd';

import { ArrowRightOutlined } from '@ant-design/icons';

import useStyles from './styles';

const AuthForm = () => {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const emailRef = useRef();
  const classes = useStyles();

  const formLayout = {
    layout: 'vertical',
  };

  const onFinish = values => {
    console.log('Success:', values);
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
        />
      </Row>
    </Form>
  );
};

export default AuthForm;
