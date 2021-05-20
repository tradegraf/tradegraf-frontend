import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
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

import { AlertComponent, AlertComponentXL } from '../../components/Error';
import { userAtom } from '../../state/user/atoms';
import routes from '../../shared/routes';
import verificationSchema from './schema';

type VerificationValues = {
  email: string;
};

const Verification: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useRecoilState(userAtom);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState<string>('REQUEST_CODE');
  const [isVerificationCodeSent, setIsVerificationCodeSent] = useState<boolean>(false);
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  const history = useHistory();

  const initialValues: VerificationValues = {
    email: '',
  };

  const resendConfirmationCode = async (
    e: React.MouseEvent<HTMLButtonElement>,
    { email }: VerificationValues,
  ) => {
    e.preventDefault();
    setUserEmail(email);
    return Auth.resendSignUp(email)
      .then(res => {
        setCurrentTab('VERIFICATION');
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
        if (res === 'SUCCESS') setCurrentTab('SUCCESS');
        setErrorMessage(null);
        setIsVerificationCodeSent(false);
        // history.push(routes.get('DASHBOARD').path);
      })
      .catch(error => {
        setErrorMessage(error.message);
      })
      .finally(() => setLoading(false));
  };

  const handleSigninRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.push(routes.get('LOGIN').path);
  };

  useEffect(() => {
    if (user) {
      history.push(routes.get('DASHBOARD').path);
    }
  }, [history, user]);

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
          {currentTab === 'REQUEST_CODE' && (
            <Formik
              initialValues={initialValues}
              validationSchema={verificationSchema}
              onSubmit={resendConfirmationCode}
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
          )}
          {currentTab === 'VERIFICATION' && (
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
          {currentTab === 'SUCCESS' && (
            <>
              <AlertComponentXL
                status="success"
                title="Verification Successful!"
                message="Thanks for verifying your account! You can log in to your account now!"
              />
              <Button
                colorScheme="brand"
                onClick={handleSigninRedirect}
                _focus={{ shadow: 'none' }}
                isLoading={loading}
                w="100%"
              >
                Login
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Verification;
