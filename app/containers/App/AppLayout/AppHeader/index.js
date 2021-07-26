import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Dropdown, Button, Row, Col } from 'antd';
import _ from 'lodash';
import { LogoutOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import Logo from '@app/components/Logo';

import { getLangKey } from '@app/i18n';
import routes from '@app/shared/routes';
import { useAuth } from '@app/shared/hooks/useAuth';
import useStyles from './styles';

const { Header } = Layout;
const { Item, Divider } = Menu;

const AppHeader = (properties) => {
	const { t } = useTranslation();
	const classes = useStyles();
	const { user, logout } = useAuth();

	const userName = _.get(user, 'name', '');

	const menu = (
		<Menu>
			<Item key="Item-1">{userName}</Item>

			<Divider />
			{/* <Item key="Item-4" onClick={logoutRequest}>
				<LogoutOutlined size="large" /> {t('LOGOUT')}
			</Item> */}
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
			{/* <div className={classes.userMenu}>
				<Dropdown overlay={menu} placement="bottomLeft">
					<Button type="primary" shape="circle" size="large" className={classes.userButton}>
						{userName.charAt(0)}
					</Button>
				</Dropdown>
			</div> */}
			<Button icon={<LogoutOutlined />} onClick={logout}>
				Logout
			</Button>
		</Header>
	);
};

export default AppHeader;
