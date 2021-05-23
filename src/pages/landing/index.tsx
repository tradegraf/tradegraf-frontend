import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Center, Box, Link } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import routes from '../../shared/routes';

const Landing: React.FC = () => {
  return (
    <Box h="20rem" w="100%">
      <Center flexDirection="column" h="100%">
        <Link as={RouterLink} to={routes.get('LOGIN').path} _focus={{ shadow: 'none' }}>
          Sign in <ArrowForwardIcon />
        </Link>
      </Center>
    </Box>
  );
};

export default Landing;
