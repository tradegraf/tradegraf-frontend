import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import styles from './styles';
import components from './components';

const overrides = {
	styles,
	components,
	// Other foundational style overrides go here
};

export default extendTheme(
	overrides,
	withDefaultColorScheme({
		colorScheme: 'blackAlpha',
		components: ['Stats'],
	}),
);
