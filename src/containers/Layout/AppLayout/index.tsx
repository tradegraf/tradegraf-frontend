import React from 'react';
import { Container } from '@chakra-ui/react';

export const AppLayout: React.FC = ({ children }) => (
  <Container maxW="container.xl">{children}</Container>
);
