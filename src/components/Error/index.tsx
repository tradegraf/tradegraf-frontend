import React from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

interface Props {
	title: string;
	message: string;
}

export const ErrorComponent: React.FC<Props> = ({ title, message }) => (
	<Alert
		status="error"
		variant="subtle"
		flexDirection="column"
		alignItems="center"
		justifyContent="center"
		textAlign="center"
	>
		<AlertIcon boxSize="40px" mr={0} />
		<AlertTitle mt={4} mb={1} fontSize="lg">
			{title}
		</AlertTitle>
		<AlertDescription maxWidth="sm">{message}</AlertDescription>
	</Alert>
);
