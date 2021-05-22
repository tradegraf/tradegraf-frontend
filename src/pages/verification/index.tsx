import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Formik, Form, Field } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Input,
  PinInput,
  PinInputField,
  HStack,
  Stack,
  Button,
} from '@chakra-ui/react';
import { Auth } from 'aws-amplify';

import { AlertComponent } from '../../components/Error';
import { authAtom, userAtom } from '../../state/user/atoms';
import routes from '../../shared/routes';
import verificationSchema from './schema';

type VerificationValues = {
  email: string;
};

const Verification: React.FC = () => {
  const setUser = useSetRecoilState(userAtom);
  const authState = useRecoilValue(authAtom);
  const [userEmail, setUserEmail] = useState<string>(authState?.username || '');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isVerificationCodeSent, setIsVerificationCodeSent] = useState<boolean>(!!authState);

  const history = useHistory();

  const initialValues: VerificationValues = {
    email: authState?.username || '',
  };

  const resendVerificationCode = async ({ email }: VerificationValues) => {
    setUserEmail(email);
    return Auth.resendSignUp(email)
      .then(res => {
        setIsVerificationCodeSent(true);
        // eslint-disable-next-line no-console
        console.log(res);
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  const handleSignupVerification = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    return Auth.confirmSignUp(userEmail, verificationCode)
      .then(res => {
        setErrorMessage(null);
        if (res === 'SUCCESS' && authState?.password) {
          Auth.signIn(userEmail, authState.password)
            .then(({ signInUserSession }) => {
              setUser(signInUserSession);
              setLoading(false);
              history.push(routes.get('DASHBOARD').path);
            })
            .catch(err => {
              setErrorMessage(err.message);
              setLoading(false);
            });
        } else {
          setLoading(false);
          history.push(routes.get('LOGIN').path);
        }
      })
      .catch(error => {
        setLoading(false);
        setErrorMessage(error.message);
      });
  };

  return (
    <Stack spacing={4}>
      <Text fontSize="2xl" alignSelf="center">
        Verify
      </Text>
      <Stack spacing={4} alignItems="center" w="full">
        {isVerificationCodeSent && (
          <AlertComponent status="warning" message="We sent a verification code to your email!" />
        )}
        {errorMessage && <AlertComponent message={errorMessage} />}
        <Stack spacing={8} alignItems="center" flexDir="column" w="full">
          {isVerificationCodeSent ? (
            <Formik
              initialValues={initialValues}
              validationSchema={verificationSchema}
              onSubmit={resendVerificationCode}
            >
              {formik => (
                <Form style={{ width: '100%' }}>
                  <Stack spacing={8}>
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                          <FormLabel htmlFor="email">Email Address</FormLabel>
                          <Input {...field} id="email" placeholder="name@tradegraf.com" />
                          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      type="submit"
                      colorScheme="brand"
                      _focus={{ shadow: 'none' }}
                      isDisabled={!formik.isValid}
                      isLoading={loading}
                    >
                      Send
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          ) : (
            <>
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
                isLoading={loading}
                w="100%"
              >
                Verify
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Verification;
