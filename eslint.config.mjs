import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      semi: ['warn', 'always'],
      quotes: ['warn', 'single'],
      'array-bracket-spacing': 'error',
      'arrow-spacing': 'error',
      complexity: 'off',
      curly: 'off',
      'no-buffer-constructor': 'error',
      'no-var': 'error',
      'no-console': 'error',
      indent: ['warn', 2],
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
        },
      ],
      'no-unused-expressions': 'error',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
