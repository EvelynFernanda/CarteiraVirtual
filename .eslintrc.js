module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: [
    'import',
    'react-hooks',
    'react',
    'react-native',
    '@typescript-eslint',
  ],
  ignorePatterns: ['coverage/', '__tests__/'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _atoms: './src/components/atoms',
          _components: './src/components',
          _constants: './src/constants',
          _molecules: './src/components/molecules',
          _navigations: './src/navigations',
          _organisms: './src/components/organisms',
          _scenes: './src/scenes',
          _styles: './src/styles',
          _utils: './src/utils',
          _services: './src/services',
          _templates: './src/templates',
          _hooks: './src/hooks',
          _languages: './src/i18n',
          _interfaces: './src/interfaces',
          _modules: './src/modules',
          _store: './src/store'
        },
      },
      'babel-module': {},
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['__tests__/**'],
      },
    ],
  },
};
