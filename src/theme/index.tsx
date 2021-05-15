import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import styles from './styles';
import components from './components';
import colors from './colors';

const overrides = {
	styles,
	components,
	colors,
	// Other foundational style overrides go here
};

export default extendTheme(
	overrides,
	withDefaultColorScheme({
		colorScheme: 'blackAlpha',
		components: ['Stats'],
	}),
);
