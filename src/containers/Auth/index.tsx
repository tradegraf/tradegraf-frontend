import React, { FC } from 'react';
import { Flex, Box, Stack, useColorModeValue } from '@chakra-ui/react';

import { AuthHeader } from '../Layout/AppHeader';

export const AuthContainer: FC = ({ children }) => (
  <Flex minH="100vh" align="center" justify="center">
    <Stack spacing={8} mx="auto" w="full" maxW="lg" py={12} px={6}>
      <AuthHeader />
      <Box rounded="md" minHeight="18rem" bg={useColorModeValue('gray.50', 'blackAlpha.600')} p={8}>
        {children}
      </Box>
    </Stack>
  </Flex>
);
