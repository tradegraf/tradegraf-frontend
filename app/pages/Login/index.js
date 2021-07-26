import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { ErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { Layout, Typography, Space } from 'antd';

import Logo from '@app/components/Logo';
import Box from '@app/components/Box';
import { DefaultSpinner } from '@app/components/Spinner';
import ErrorFallback from '@app/components/ErrorFallback';
import { useAuth } from '@app/shared/hooks/useAuth';
import { getEmailFromLocalStorage } from '@app/utils/localStorage';

import AuthForm from './components/AuthForm';
import useStyles from './styles';

const { Title } = Typography;
const { Content } = Layout;

const PostAuth = lazy(() => import('./components/PostAuth'));

const LoginPage = () => {
	const { isLoginRequestSent } = useAuth();
	const temporaryEmail = getEmailFromLocalStorage();
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
							{isLoginRequestSent || temporaryEmail ? (
								<Suspense fallback={<DefaultSpinner />}>
									<PostAuth />
								</Suspense>
							) : (
								<ErrorBoundary FallbackComponent={ErrorFallback}>
									<Title level={3} className={`${classes.marginReset} ${classes.title}`}>
										{t('LOGIN')}
									</Title>
									<AuthForm />
								</ErrorBoundary>
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
