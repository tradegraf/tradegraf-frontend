import React, { Suspense } from 'react';
import { Flex, Spinner } from '@chakra-ui/react';

import { UserInputForJokes } from '../../../utils/userInputJokes';

const ColorModeSwitcher = React.lazy(() => import('../../../ColorModeSwitcher'));
const Logo = React.lazy(() => import('../../../components/Logo'));

export const AppHeader: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
	if (!isAuthenticated) return null;

	return (
		<Flex wrap="wrap" py=".75rem" justifyContent="space-between">
			<Suspense fallback={<Spinner />}>
				<Logo h="2rem" pointerEvents="none" />
			</Suspense>
			<UserInputForJokes />
			<Suspense fallback={<Spinner />}>
				<ColorModeSwitcher justifySelf="flex-end" />
			</Suspense>
		</Flex>
	);
};
