const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const angularEslintPlugin = require('@angular-eslint/eslint-plugin');
const angularEslintTemplatePlugin = require('@angular-eslint/eslint-plugin-template');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  {
    files: ['**/*.ts'],
    ignores: ['projects/**/*'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      '@angular-eslint': angularEslintPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        { singleQuote: true, trailingComma: 'all', printWidth: 70 },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            constructors: 'no-public',
            properties: 'off',
          },
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { prefix: 'app', style: 'kebab-case', type: 'element' },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        { prefix: 'app', style: 'camelCase', type: 'attribute' },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': 'error',
      'spaced-comment': [
        'error',
        'always',
        { line: { markers: ['/'] } },
      ],
      'no-multiple-empty-lines': 'error',
      'prefer-const': 'error',
      'max-len': ['error', { code: 70, ignoreComments: true }],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'public-static-field',
            'protected-static-field',
            'private-static-field',
            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',
            'public-constructor',
            'protected-constructor',
            'private-constructor',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: { parser: require('@angular-eslint/template-parser') },
    plugins: {
      '@angular-eslint/template': angularEslintTemplatePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error', { printWidth: 80 }],
      '@angular-eslint/template/eqeqeq': 'error',
      '@angular-eslint/template/no-heading-content': 'off',
    },
  },
  {
    files: ['**/*spec.ts', '**/*mock.ts'],
    rules: {
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { vars: 'local', args: 'none' },
      ],
    },
  },
  {
    files: ['**/*.state.ts'],
    rules: {
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];
