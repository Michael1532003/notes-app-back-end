import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

/** @type {import('eslint').Linter.Config} */
export default {
  extends: [
    daStyle,
    pluginJs.configs.recommended,
  ],
  overrides: [
    {
      files: ['**/*.js'],
      languageOptions: {
        sourceType: 'commonjs',
        globals: globals.browser, 
      },
    },
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
  },
};