import React, { memo, Suspense, FC } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Flex, Spinner, Link, Button, Stack } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { Auth } from 'aws-amplify';

import { UserInputForJokes } from '../../../utils/userInputJokes';
import routes from '../../../shared/routes';
import { userAtom } from '../../../state/user/atoms';

const ColorModeSwitcher = React.lazy(() => import('../../../ColorModeSwitcher'));
const Logo = React.lazy(() => import('../../../components/Logo'));

const AppHeader: FC = () => {
  const setUser = useSetRecoilState(userAtom);
  const history = useHistory();

  const handleSignOut = async () => {
    return Auth.signOut({ global: true })
      .then(() => {
        setUser(null);
        return history.push(routes.get('LANDING').path);
      })
      .catch(error => {
        throw error;
      });
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

export const AuthHeader: FC = memo(() => (
  <Stack align="center">
    <Logo w="10rem" />
  </Stack>
));

export default memo(AppHeader);
