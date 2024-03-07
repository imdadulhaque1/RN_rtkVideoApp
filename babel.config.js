module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@rtk': './src/rtk',
          '@navigations': './src/navigations',
          '@axios': './src/axios',
          '@constans': './src/constans',
          '@src': './src',
        },
      },
    ],
  ],
};
