/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box } from '@chakra-ui/react';
import { HiddenEasterEgg } from 'react-hidden-easter-egg';

export const UserInputForJokes: any = () => {
	return (
		<Box pos="fixed" top="8px" right="16px" zIndex={25}>
			<HiddenEasterEgg resetEggMs={10000} code={['b', 'e', 'r', 'k', 'a', 'y']} codeMode="KEY">
				🐒
			</HiddenEasterEgg>
			<HiddenEasterEgg resetEggMs={10000} code={['l', 'o', 'a', 'r', 'd']} codeMode="KEY">
				👑
			</HiddenEasterEgg>
			<HiddenEasterEgg resetEggMs={10000} code={['d', 'o', 'g', 'e']} codeMode="KEY">
				🚀
			</HiddenEasterEgg>
		</Box>
	);
};
