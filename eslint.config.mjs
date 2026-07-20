import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  { ignores: ['dist/', 'docs/', 'node_modules/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],
    },
  },
  {
    files: ['**/*.config.js', '**/*.config.mjs'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
);
