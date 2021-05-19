/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Formik, Form, Field } from 'formik';
import {
  Flex,
  Box,
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
import { AuthHeader } from '../../containers/Layout/AppHeader';
import { AlertComponent } from '../../components/Error';
import routes from '../../shared/routes';
import { userAtom } from '../../state/user/atoms';

type LoginValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();

  const initialValues: LoginValues = {
    email: '',
    password: '',
  };

  const onSubmit = ({ email, password }: LoginValues) => {
    setIsLoading(true);
    Auth.signIn(email, password)
      .then(({ signInUserSession }) => {
        setIsLoading(false);
        return setUser(signInUserSession);
      })
      .catch(err => {
        setIsLoading(false);
        return setError(err.message);
      });
  };

  useEffect(() => {
    if (user) {
      history.push(routes.get('DASHBOARD').path);
    }
  }, [history, user]);

  return (
    <Formik initialValues={initialValues} validationSchema={Schema} onSubmit={onSubmit}>
      {formik => (
        <Form>
          <Flex minH="100vh" align="center" justify="center">
            <Stack spacing={8} mx="auto" w="full" maxW="lg" py={12} px={6}>
              <AuthHeader />
              <Box rounded="md" bg={useColorModeValue('gray.50', 'blackAlpha.600')} p={8}>
                <Stack spacing={4}>
                  <Text fontSize="2xl" alignSelf="center">
                    Sign in
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
                        <Input {...field} id="password" placeholder="password" type="password" />
                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Stack spacing={6}>
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
                      isLoading={isLoading}
                    >
                      Sign in
                    </Button>
                    <Divider />
                    <Flex alignItems="center" justifyContent="center">
                      <Text color={useColorModeValue('gray.500', 'gray.300')} fontSize="sm">
                        Don&apos;t have an account?
                      </Text>
                      <Link
                        as={RouterLink}
                        to={routes.get('SIGNUP').path}
                        fontSize="sm"
                        color={useColorModeValue('brand.700', 'brand.300')}
                        ml=".5rem"
                        _focus={{ shadow: 'none' }}
                      >
                        Sign up
                      </Link>
                    </Flex>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
