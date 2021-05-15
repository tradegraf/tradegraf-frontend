import React from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription, AlertProps } from '@chakra-ui/react';

interface Props extends AlertProps {
	message: string;
}

export const AlertComponentXL: React.FC<Props> = ({ title, message, status }) => (
	<Alert
		status={status}
		variant="subtle"
		flexDirection="column"
		alignItems="center"
		justifyContent="center"
		textAlign="center"
	>
		<AlertIcon boxSize="40px" mr={0} />
		{title && (
			<AlertTitle mt={4} mb={1} fontSize="lg">
				{title}
			</AlertTitle>
		)}
		<AlertDescription maxWidth="sm">{message}</AlertDescription>
	</Alert>
);

export const AlertComponent: React.FC<Props> = ({ title, message, status = 'error' }) => (
	<Alert status={status}>
		<AlertIcon />
		{title && <AlertTitle mr={2}>{title}</AlertTitle>}
		<AlertDescription>{message}</AlertDescription>
	</Alert>
);
