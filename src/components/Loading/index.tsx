import React from 'react';
import { Box, Center, Flex, Spinner, useColorModeValue } from '@chakra-ui/react';

export const Loading: React.FC = () => (
  <Center height="100%">
    <Spinner />
  </Center>
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
