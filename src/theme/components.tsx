/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
  Stat: {
    baseStyle: (props: { colorMode: string }) => ({
      bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
    }),
  },
};
