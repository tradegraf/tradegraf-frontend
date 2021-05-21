import React, { useState, useEffect } from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
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
  Stack,
  Link,
  Button,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { Auth } from 'aws-amplify';

import Schema from './schema';
import { AlertComponent } from '../../components/Error';
import { authAtom, userAtom } from '../../state/user/atoms';
import routes from '../../shared/routes';

type SignupValues = {
  email: string;
  password: string;
};

const Signup: React.FC = () => {
  const user = useRecoilValue(userAtom);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const setAuthState = useSetRecoilState(authAtom);

  const history = useHistory();

  const initialValues: SignupValues = {
    email: '',
    password: '',
  };

  const onSignupSubmit = ({ email, password }: SignupValues) => {
    setLoading(true);
    Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
    })
      .then(() => {
        setAuthState({ username: email, password });
        setLoading(false);
        history.push(routes.get('VERIFICATION').path);
      })
      .catch(err => {
        return setErrorMessage(err.message);
      });
  };

  useEffect(() => {
    if (user) {
      history.push(routes.get('DASHBOARD').path);
    }
  }, [history, user]);

  return (
    <Stack spacing={6}>
      <Text fontSize="2xl" alignSelf="center">
        Sign up
      </Text>
      {errorMessage && <AlertComponent message={errorMessage} />}
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
              <Button
                type="submit"
                colorScheme="brand"
                isDisabled={!formik.isValid}
                isLoading={loading}
              >
                Sign up
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
      <Divider />
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
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
  );
};

export default Signup;
