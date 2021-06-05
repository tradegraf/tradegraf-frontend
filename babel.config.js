module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    'lodash',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    'transform-react-remove-prop-types',
    '@babel/plugin-transform-react-inline-elements',
    '@babel/plugin-transform-react-constant-elements',
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
      },
      'antd',
    ],
    [
      'import',
      {
        libraryName: '@ant-design/icons',
        libraryDirectory: 'lib/icons',
        camel2DashComponentName: false,
      },
      '@ant-design/icons',
    ],
  ],
  env: {
    production: {
      only: ['app'],
      plugins: [
        'lodash',
        'transform-react-remove-prop-types',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-modules-commonjs',
        'dynamic-import-node',
      ],
    },
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs', 'dynamic-import-node'],
    },
  },
};
