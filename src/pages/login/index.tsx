import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Formik, Form, Field } from 'formik';
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Alert,
	AlertIcon,
	AlertDescription,
	useColorModeValue,
} from '@chakra-ui/react';
import { Auth } from 'aws-amplify';

type LoginValues = {
	email: string;
	password: string;
};

import Schema from './schema';

import Logo from '../../components/Logo';
import routes from '../../shared/routes';
import { userAtom } from '../../state/user/atoms';

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
			.then(res => {
				return setUser(res);
			})
			.catch(err => {
				return setError(err.message);
			});
	};

	useEffect(() => {
		if (user) {
			history.push(routes.get('DASHBOARD').path);
		}
	}, [user]);

	return (
		<Formik initialValues={initialValues} validationSchema={Schema} onSubmit={onSubmit}>
			{formik => (
				<Form>
					<Flex minH={'100vh'} align={'center'} justify={'center'}>
						<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
							<Stack align={'center'}>
								<Logo w="10rem" />
							</Stack>
							<Box
								rounded={'lg'}
								bg={useColorModeValue('white', 'blackAlpha.300')}
								boxShadow={'lg'}
								p={8}
							>
								<Stack spacing={4}>
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
									<Stack spacing={8}>
										<Stack
											direction={{ base: 'column', sm: 'row' }}
											align={'start'}
											justify={'space-between'}
										>
											<Checkbox>Remember me</Checkbox>
											<Link color={'blue.400'}>Forgot password?</Link>
										</Stack>
										<Button type="submit" isDisabled={!formik.isValid} isLoading={isLoading}>
											Sign in
										</Button>
									</Stack>
								</Stack>
							</Box>
							{error && (
								<Alert status="error">
									<AlertIcon />
									<AlertDescription>{error}</AlertDescription>
								</Alert>
							)}
						</Stack>
					</Flex>
				</Form>
			)}
		</Formik>
	);
};

export default Login;
