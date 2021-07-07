/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Form, Row, Button, Input, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';

import { getIsLoginPending } from '@app/redux/selectors/auth';
import { Creators } from '@app/redux/actions/auth';

import useStyles from './styles';

const { Text } = Typography;

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
				className={classes.marginReset}
			>
				<Input
					placeholder={t('authPage:EMAIL_PLACEHOLDER')}
					prefix={<MailOutlined className={classes.inputIcon} />}
					size="large"
					ref={emailRef}
					className={classes.input}
				/>
			</Form.Item>
			<Row justify="center" className={classes.submitButton}>
				<Button
					type="primary"
					htmlType="submit"
					size="large"
					loading={isLoginRequestPending}
					className={classes.button}
				>
					{t('landing:LOGIN_VERB')}
				</Button>
			</Row>
			{/* <Row>
				<Text type="secondary" className={classes.approval}>
					{t('authPage:APPROVAL')}
				</Text>
			</Row> */}
		</Form>
	);
};

export default AuthForm;
