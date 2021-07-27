import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Dropdown, Button } from 'antd';
import {
	LogoutOutlined,
	UserAddOutlined,
	ShoppingOutlined,
	TeamOutlined,
	UserOutlined,
	ApiOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import Logo from '@app/components/Logo';
import routes from '@app/shared/routes';
import { useAuth } from '@app/shared/hooks/useAuth';
import useStyles from './styles';

const { Header } = Layout;
const { Divider } = Menu;

const AppHeader = () => {
	const { t } = useTranslation('menu');
	const classes = useStyles();
	const { logout } = useAuth();

	const headMenu = () => (
		<Menu>
			<Menu.Item key="1" icon={<UserAddOutlined />}>
				{t('PROFILE_MANAGEMENT')}
				<Link to="./profile/overview" />
			</Menu.Item>
			<Menu.Item key="2" icon={<ApiOutlined />}>
				<Link to="./profile/api" />
				{t('API_MANAGEMENT')}
			</Menu.Item>
			<Menu.Item key="3" icon={<ShoppingOutlined />}>
				<Link to="./profile/subscription" />
				{t('SUBSCRIPTION')}
			</Menu.Item>
			<Menu.Item key="4" icon={<TeamOutlined />}>
				<Link to="./profile/invite" />
				{t('INVITE')}
			</Menu.Item>
			<Divider />
			<Menu.Item key="5" icon={<LogoutOutlined />} onClick={logout} danger>
				{t('LOGOUT')}
			</Menu.Item>
		</Menu>
	);

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
			<Dropdown overlay={headMenu}>
				<Button icon={<UserOutlined />} placement="bottomRight" />
			</Dropdown>
		</Header>
	);
};

export default AppHeader;
