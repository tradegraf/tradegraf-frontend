import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Layout, Typography, Space } from 'antd';

const { Title } = Typography;

import Logo from '@app/components/Logo';
import Box from '@app/components/Box';
import AuthForm from './components/AuthForm';
import PostAuth from './components/PostAuth';
import useStyles from './styles';
import { getIsLoginSuccess } from '@app/redux/selectors/auth';
import { DefaultSpinner } from '@app/components/Spinner';

const { Content } = Layout;

const LoginPage = () => {
	const isLoginSuccess = useSelector(getIsLoginSuccess);
	const classes = useStyles();

	const { t } = useTranslation('landing');

	return (
		<article>
			<Helmet>
				<title>Login</title>
			</Helmet>
			<Layout>
				<Content className={classes.center}>
					<Space direction="vertical" size="small" className={classes.container}>
						<Logo className={classes.logo} />
						<Box direction="column">
							<Title level={3} className={classes.marginReset}>
								{t('LOGIN')}
							</Title>
							{!isLoginSuccess ? (
								<AuthForm />
							) : (
								<Suspense fallback={<DefaultSpinner />}>
									<PostAuth />
								</Suspense>
							)}
						</Box>
					</Space>
				</Content>
			</Layout>
		</article>
	);
};

LoginPage.propTypes = {};

export default LoginPage;
