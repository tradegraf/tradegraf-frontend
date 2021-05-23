import React, { memo, Suspense, FC } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Flex, Spinner, Link, Stack } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { Auth } from 'aws-amplify';

import { UserInputForJokes } from '../../../utils/userInputJokes';
import routes from '../../../shared/routes';
import { userAtom } from '../../../state/user/atoms';
import { ProfileMenu } from './ProfileMenu';

const ColorModeSwitcher = React.lazy(() => import('../../../ColorModeSwitcher'));
const Logo = React.lazy(() => import('../../../components/Logo'));

const AppHeader: FC = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const history = useHistory();

  const { payload } = user.idToken;

  const handleSignout = async () => {
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
    <Flex wrap="wrap" py=".75rem" alignItems="center" justifyContent="space-between">
      <Suspense fallback={<Spinner />}>
        <Flex h="100%">
          <Link as={RouterLink} to={routes.get('DASHBOARD').path} _focus={{ shadow: 'none' }}>
            <Logo width="8rem" />
          </Link>
        </Flex>
      </Suspense>
      <Flex alignItems="center">
        <UserInputForJokes />
        <Suspense fallback={<Spinner />}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Suspense>
        <ProfileMenu user={payload} handleSignout={handleSignout} />
      </Flex>
    </Flex>
  );
};

export const AuthHeader: FC = memo(() => (
  <Stack align="center">
    <Logo height="auto" width="10rem" />
  </Stack>
));

export default memo(AppHeader);
