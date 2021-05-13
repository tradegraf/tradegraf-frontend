import React, { Suspense } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Flex, Spinner, Link, Button } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { Auth } from 'aws-amplify';

import { UserInputForJokes } from '../../../utils/userInputJokes';
import routes from '../../../shared/routes';
import { userAtom } from '../../../state/user/atoms';

const ColorModeSwitcher = React.lazy(() => import('../../../ColorModeSwitcher'));
const Logo = React.lazy(() => import('../../../components/Logo'));

export const AppHeader: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
	const setUser = useSetRecoilState(userAtom);
	if (!isAuthenticated) return null;

	const history = useHistory();

	const handleSignOut = async () => {
		try {
			await Auth.signOut({ global: true });
			setUser(null);
			return history.push(routes.get('LANDING').path);
		} catch (error) {
			console.log('error signing out: ', error);
		}
	};

	return (
		<Flex wrap="wrap" py=".75rem" justifyContent="space-between">
			<Suspense fallback={<Spinner />}>
				<Link as={RouterLink} to={routes.get('DASHBOARD').path} _focus={{ shadow: 'none' }}>
					<Logo h="2rem" pointerEvents="none" />
				</Link>
			</Suspense>
			<Flex>
				<UserInputForJokes />
				<Suspense fallback={<Spinner />}>
					<ColorModeSwitcher justifySelf="flex-end" />
				</Suspense>
				<Button onClick={handleSignOut} ml="1rem" _focus={{ shadow: 'none' }}>
					Logout
				</Button>
			</Flex>
		</Flex>
	);
};
