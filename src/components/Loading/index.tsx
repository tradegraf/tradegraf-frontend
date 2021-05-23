import React from 'react';
import { Box, Flex, Spinner, useColorModeValue } from '@chakra-ui/react';

export const Loading: React.FC = () => (
  <Flex alignItems="center" justifyContent="center" height="18rem">
    <Spinner />
  </Flex>
);

export const FullPageLoading: React.FC = () => (
  <Box
    position="fixed"
    top="0"
    left="0"
    maxWidth="100vw"
    maxHeight="100vh"
    backgroundColor={useColorModeValue('white', 'black')}
  >
    <Flex width="100%" height="100%" alignItems="center" justifyContent="center">
      <Spinner size="xl" />
    </Flex>
  </Box>
);
