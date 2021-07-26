import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Layout, Button, Space } from 'antd';

import Logo from '@app/components/Logo';
import { DefaultSpinner } from '@app/components/Spinner';
import routes from '@app/shared/routes';
import useStyles from './styles';

const handleAuthModalLoad = () => import('@app/pages/Login');

const { Content } = Layout;

const HomePage = () => {
	const classes = useStyles();

	const history = useHistory();

	const { t } = useTranslation('landing');

	const handleLoginRedirect = () => {
		history.push(routes.get('LOGIN').path);
	};

	return (
		<>
			<Helmet>
				<meta name="description" content="Tradegraf" />
			</Helmet>
			<Layout className={classes.wrapper}>
				<Content>
					<Space direction="vertical" size="large" className={classes.container}>
						<Logo />
						<Suspense fallback={<DefaultSpinner />}>
							<Button
								type="primary"
								onClick={handleLoginRedirect}
								onMouseEnter={handleAuthModalLoad}
							>
								{t('LOGIN')}
							</Button>
						</Suspense>
					</Space>
				</Content>
			</Layout>
		</>
	);
};

HomePage.propTypes = {};

export default HomePage;
