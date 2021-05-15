'use strict';

module.exports = {
  ignorePatterns: ['dist/'],
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'plugin:unicorn/recommended', 'prettier'],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['*.cjs'],
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        strict: ['error', 'global'],
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['src/**/*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'import/extensions': 'off',
        'import/order': [
          'error',
          {
            alphabetize: { order: 'asc' },
          },
        ],
        'sort-imports': ['error', { ignoreDeclarationSort: true }],
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
  ],
  rules: {
    'max-len': ['error', { code: 120 }],
    // Prettier doesn't change unnecessary backtick quotes to single quotes
    quotes: ['error', 'single'],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
  },
};
