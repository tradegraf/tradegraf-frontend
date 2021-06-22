import React from 'react';
import { Layout, Menu, Dropdown, Button, Row, Col } from 'antd';
import _ from 'lodash';
import { LogoutOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { connect, useDispatch, useSelector } from 'react-redux';

import Logo from '@app/components/Logo';

import { getUser } from '@app/redux/selectors/auth';
import { Creators } from '@app/redux/actions/auth';
import { getLangKey } from '@app/i18n';
import useStyles from './styles';

const { Header } = Layout;
const { Item, Divider } = Menu;

const AppHeader = (props) => {
	const dispatch = useDispatch();
	const { logoutRequest } = props;
	const { t } = useTranslation();
	const classes = useStyles();
	const user = useSelector(getUser);

	const userName = _.get(user, 'name', '');

	const menu = (
		<Menu>
			<Item key="Item-1">{userName}</Item>

			<Divider />
			<Item key="Item-4" onClick={logoutRequest}>
				<LogoutOutlined size="large" /> {t('LOGOUT')}
			</Item>
		</Menu>
	);

	return (
		<Header
			className={[
				'd-flex align-items-center justify-content-between layout header-p',
				classes.appHeader,
			]}
		>
			<Logo />
			<Logo />
			{/* <div className={classes.userMenu}>
				<Dropdown overlay={menu} placement="bottomLeft">
					<Button type="primary" shape="circle" size="large" className={classes.userButton}>
						{userName.charAt(0)}
					</Button>
				</Dropdown>
			</div> */}
		</Header>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	logoutRequest: Creators.logoutRequest,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(AppHeader);
