import Head from 'next/head';
import Image from 'next/image';
import { Layout, Button, Space } from 'antd';

const { Content } = Layout;

import Logo from '../components/Logo';
import LogoSpinner from '../components/LogoSpinner';
import { CollectionsPage } from '../components/try';
import useStyles from './styles';

export default function Home() {
	const classes = useStyles();
	return (
		<>
			<Head>
				<title>Tradegraf</title>
				<meta name="description" content="Tradegraf" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Content>
					<Space direction="vertical" size="large" className={classes.container}>
						<Logo />
						<CollectionsPage />
						<Button type="primary">Login</Button>
					</Space>
				</Content>
			</Layout>
		</>
	);
}
