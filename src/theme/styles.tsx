/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { mode } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

export default {
	global: (props: Dict<any>) => ({
		body: {
			fontFamily: 'body',
			color: mode('gray.800', 'whiteAlpha.900')(props),
			bg: mode('white', '#18191a')(props),
			lineHeight: 'base',
		},
	}),
	colors: {
		black: {
			900: 'red',
		},
	},
};
