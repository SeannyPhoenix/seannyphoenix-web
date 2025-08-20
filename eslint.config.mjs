import js from '@eslint/js';
import tseslint from 'typescript-eslint';

const eslintConfig = [
  js.configs.recommended, // Base JS recommended rules
  tseslint.configs.eslintRecommended, // TypeScript recommended rules
  {
    rules: {
      // Top common rules:
      'no-unused-vars': 'warn', // Warn about unused variables
      'no-undef': 'error', // Error on undefined variables
      'no-console': 'warn', // Warn on console.log (can be changed)
      'eqeqeq': 'error', // Require === and !==
      'curly': 'error', // Require curly braces for all control statements
      'semi': ['error', 'always'], // Require semicolons
      'quotes': ['error', 'single'], // Use single quotes
      'no-redeclare': 'error', // Prevent variable redeclaration
      'no-empty': 'warn', // Warn on empty blocks
      'no-extra-semi': 'error', // Prevent unnecessary semicolons
    },
  },
];

export default eslintConfig;
