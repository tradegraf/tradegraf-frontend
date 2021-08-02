import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
// import { useTranslation } from 'react-i18next';

import Logo from '@app/components/Logo';

import routes from '@app/shared/routes';
import { useAuth } from '@app/shared/hooks/useAuth';
import useStyles from './styles';

const { Header } = Layout;

const AppHeader = () => {
	// const { t } = useTranslation();
	const classes = useStyles();
	const { logout } = useAuth();

	return (
		<Header
			className={[
				'd-flex align-items-center justify-content-between layout header-p',
				classes.appHeader,
			]}
		>
			<Link to={routes.get('DASHBOARD').path}>
				<Logo size="small" />
			</Link>
			<Button icon={<LogoutOutlined />} danger onClick={logout}>
				Logout
			</Button>
		</Header>
	);
};

export default AppHeader;
