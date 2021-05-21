/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Formik, Form, Field } from 'formik';
import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Input,
  Stack,
  Link,
  Button,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { Auth } from 'aws-amplify';

import Schema from './schema';
import { AlertComponent } from '../../components/Error';
import routes from '../../shared/routes';
import { userAtom } from '../../state/user/atoms';

interface LoginValues {
  email?: string;
  password?: string;
}

const Login: React.FC = () => {
  const setUserToken = useSetRecoilState(userAtom);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const history = useHistory();

  const initialValues: LoginValues = {
    email: '',
    password: '',
  };

  const handleSubmit = ({ email, password }: LoginValues) => {
    if (email && password) {
      setLoading(true);
      Auth.signIn(email, password)
        .then(({ signInUserSession }) => {
          setUserToken(signInUserSession);
          return history.push(routes.get('DASHBOARD').path);
        })
        .catch(err => {
          setError(err.message);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <Stack spacing={6}>
      <Formik initialValues={initialValues} validationSchema={Schema} onSubmit={handleSubmit}>
        {formik => (
          <Form>
            <Stack spacing={6}>
              <Text fontSize="2xl" alignSelf="center">
                Log In
              </Text>
              {error && <AlertComponent message={error} />}
              <Field name="email">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input {...field} id="email" placeholder="name@tradegraf.com" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input {...field} id="password" placeholder="Password" type="password" />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              {/* <Stack
											direction={{ base: 'column', sm: 'row' }}
											alignItems="end"
											justify={'space-between'}
										>
											<Link color={useColorModeValue('brand.700', 'brand.300')}>
												Forgot password?
											</Link>
										</Stack> */}
              <Button
                type="submit"
                colorScheme="brand"
                isDisabled={!formik.isValid}
                isLoading={loading}
              >
                Sign in
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
      <Divider />
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Text color={useColorModeValue('gray.500', 'gray.300')} fontSize="sm">
          Don&apos;t have an account?
        </Text>
        <Link
          as={RouterLink}
          to={routes.get('REGISTER').path}
          fontSize="sm"
          color={useColorModeValue('brand.700', 'brand.300')}
          ml=".5rem"
          _focus={{ shadow: 'none' }}
        >
          Register
        </Link>
      </Flex>
    </Stack>
  );
};

export default Login;
