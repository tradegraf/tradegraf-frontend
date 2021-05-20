/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Formik, Form, Field } from 'formik';
import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  PinInput,
  PinInputField,
  HStack,
  Stack,
  Link,
  Button,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { Auth } from 'aws-amplify';

import Schema from './schema';
import { AlertComponent } from '../../components/Error';
import { userAtom } from '../../state/user/atoms';
import routes from '../../shared/routes';
import { REGISTER_TABS } from '../../utils/Constants';

type SignupValues = {
  email: string;
  password: string;
};

const Signup: React.FC = () => {
  const user = useRecoilValue(userAtom);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState<number>(REGISTER_TABS.REGISTER);
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  const history = useHistory();

  const initialValues: SignupValues = {
    email: '',
    password: '',
  };

  const onSignupSubmit = ({ email, password }: SignupValues) => {
    setLoading(true);
    setUserEmail(email);
    Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
    })
      .then(res => {
        setCurrentTab(REGISTER_TABS.VERIFY);
      })
      .catch(err => {
        return setErrorMessage(err.message);
      })
      .finally(() => setLoading(false));
  };

  const handleSignupVerification = async () => {
    const username = userEmail;
    setLoading(true);
    return Auth.confirmSignUp(username, verificationCode)
      .then(res => {
        // history.push(routes.get('DASHBOARD').path);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.warn(error);
        setErrorMessage(error.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (user) {
      history.push(routes.get('DASHBOARD').path);
    }
  }, [history, user]);

  return (
    <Stack spacing={4}>
      <Text fontSize="2xl" alignSelf="center">
        {currentTab === REGISTER_TABS.VERIFY ? 'Verify' : 'Sign up'}
      </Text>
      {errorMessage && <AlertComponent message={errorMessage} />}
      {currentTab === REGISTER_TABS.VERIFY ? (
        <Stack spacing={4} alignItems="center">
          <AlertComponent status="warning" message="We sent a verification code to your email!" />
          <Stack spacing={8} alignItems="center" flexDir="column">
            <Text mt="1rem" mb="-1rem">
              Verification Code
            </Text>
            <HStack>
              <PinInput onChange={setVerificationCode}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
            <Button
              colorScheme="brand"
              onClick={handleSignupVerification}
              _focus={{ shadow: 'none' }}
            >
              Verify
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Formik initialValues={initialValues} validationSchema={Schema} onSubmit={onSignupSubmit}>
          {formik => (
            <Form>
              <Stack spacing={6}>
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
                      <InputGroup size="md">
                        <Input
                          {...field}
                          id="password"
                          pr="4.5rem"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter password"
                        />
                        <InputRightElement width="4.5rem">
                          <Button
                            h="1.75rem"
                            size="sm"
                            onClick={() => setShowPassword(!showPassword)}
                            _focus={{ shadow: 'none' }}
                          >
                            {showPassword ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Stack spacing={6}>
                  <Button
                    type="submit"
                    colorScheme="brand"
                    isDisabled={!formik.isValid}
                    isLoading={loading}
                  >
                    Sign up
                  </Button>
                  <Flex alignItems="center" justifyContent="center">
                    <Link
                      as={RouterLink}
                      to={routes.get('VERIFICATION').path}
                      fontSize="sm"
                      color={useColorModeValue('brand.700', 'brand.300')}
                      ml=".25rem"
                      _focus={{ shadow: 'none' }}
                    >
                      Resend Verification Code
                    </Link>
                  </Flex>
                  <Divider />
                  <Flex alignItems="center" justifyContent="center">
                    <Text color={useColorModeValue('gray.500', 'gray.300')} fontSize="sm">
                      Already registered?
                    </Text>
                    <Link
                      as={RouterLink}
                      to={routes.get('LOGIN').path}
                      fontSize="sm"
                      color={useColorModeValue('brand.700', 'brand.300')}
                      ml=".5rem"
                      _focus={{ shadow: 'none' }}
                    >
                      Log in
                    </Link>
                  </Flex>
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
      )}
    </Stack>
  );
};

export default Signup;
