import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import { FlatCompat } from '@eslint/eslintrc'
const compat = new FlatCompat({})

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },

  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'error',

      // to enforce using type for object type definitions, can be type or interface
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    },
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        process: 'readonly',
        myCustomGlobal: 'readonly',
      },
    },
  },
  { ignores: ['node_modules', 'dist'] },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.config({
    env: {
      es2020: true,
      node: true,
    },
    extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  }),
]
