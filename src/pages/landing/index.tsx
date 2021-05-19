import React, { useEffect } from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Center, Box, Link } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import routes from '../../shared/routes';
import { userSelector } from '../../state/user/selectors';

const Landing: React.FC = () => {
  const userState = useRecoilValue(userSelector);

  const history = useHistory();

  useEffect(() => {
    if (userState) {
      history.push(routes.get('DASHBOARD').path);
    }
  }, [history, userState]);

  return (
    <Box h="100vh" w="100%">
      <Center flexDirection="column" h="100%">
        <Link as={RouterLink} to={routes.get('LOGIN').path} _focus={{ shadow: 'none' }}>
          Sign in <ArrowForwardIcon />
        </Link>
      </Center>
    </Box>
  );
};

export default Landing;
