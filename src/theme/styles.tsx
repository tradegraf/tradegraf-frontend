/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { mode } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

export default {
  global: (props: Dict<any>) => ({
    body: {
      fontFamily: 'body',
      color: mode('blackAlpha.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'blackAlpha.900')(props),
      lineHeight: 'base',
    },
  }),
};
