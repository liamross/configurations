const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'), // Works for monorepos.
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
  ],
  rules: {
    // Off
    // 'react/react-in-jsx-scope': 0, // Uncomment for Next.js projects.

    // On
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
      rules: {
        // Off
        '@typescript-eslint/ban-ts-ignore': 0, // Sometimes it is necessary (bad types etc).
        '@typescript-eslint/camelcase': 0, // Sometimes names are not camel case, don't enforce.
        '@typescript-eslint/no-explicit-any': 0, // Sometimes any really is necessary. Enable in public code bases.
        '@typescript-eslint/no-non-null-assertion': 0, // Sometimes this is necessary.

        // On
        '@typescript-eslint/unbound-method': 2,
        '@typescript-eslint/no-unused-vars': [2, {argsIgnorePattern: '^_'}], // Allow underscore for unused.
        '@typescript-eslint/explicit-function-return-type': [
          2,
          {allowExpressions: true},
        ],
      },
    },
    {
      files: ['**/scripts/**/*', '**/__tests__/**/*'],
      rules: {
        // Off
        '@typescript-eslint/no-var-requires': 0, // Allow var requires in scripts and tests.
        '@typescript-eslint/explicit-function-return-type': 0, // Don't require return types.
        '@typescript-eslint/no-use-before-define': 0, // Can use before define in scripts and tests.
      },
    },
  ],
};
