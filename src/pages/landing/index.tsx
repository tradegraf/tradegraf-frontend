import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Center, Box, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useAuth0 } from '@auth0/auth0-react';

import routes from '../../shared/routes';

const Landing: React.FC = () => {
	const { isAuthenticated, loginWithRedirect } = useAuth0();
	const history = useHistory();

	useEffect(() => {
		if (isAuthenticated) {
			history.push(routes.get('DASHBOARD').path);
		}
	}, [isAuthenticated]);

	return (
		<Box h="100vh" w="100%">
			<Center flexDirection="column" h="100%">
				<Button
					rightIcon={<ArrowForwardIcon />}
					colorScheme="gray"
					onClick={() => loginWithRedirect()}
				>
					Sign in
				</Button>
			</Center>
		</Box>
	);
};

export default Landing;
