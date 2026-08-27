import js from '@eslint/js';
import globals from 'globals';
import tseslintParser from '@typescript-eslint/parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', 'pnpm-lock.yaml'],
  },

  // Vanilla JS / TS outside components (astro.config.mjs, etc.)
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // TypeScript files: use the TS parser so syntax is understood
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslintParser,
    },
    rules: {},
  },

  // Astro components
  ...eslintPluginAstro.configs['flat/recommended'],

  // Disable formatting rules already handled by Prettier
  eslintConfigPrettier,
];
