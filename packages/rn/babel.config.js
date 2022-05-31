module.exports = {
  presets: [['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }]],
  plugins: [
    [
      'import',
      {
        libraryName: '@td-design/react-native',
        libraryDirectory: 'lib/module',
      },
      'rn',
    ],
    [
      'import',
      {
        libraryName: '@td-design/rn-hooks',
        libraryDirectory: 'lib/module',
        camel2DashComponentName: false, // default: true
      },
      'hooks',
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
