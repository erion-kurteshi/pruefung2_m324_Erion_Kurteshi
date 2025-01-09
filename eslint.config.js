import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha, // Für Mocha: stellt `describe` und `it` bereit
      },
    },
    ...pluginJs.configs.recommended,
  },
];
