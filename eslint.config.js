import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    ignores: ['node_modules/', 'dist/'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        module: 'writable',
        process: 'readonly',
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-console': 'off', 
    },
  },
];
