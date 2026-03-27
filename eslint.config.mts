import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
    // TypeScript configs
    ...tseslint.configs.recommended,

    // Prettier integration (must be last)
    eslintPluginPrettierRecommended,

    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // TypeScript specific rules
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-non-null-assertion': 'warn',

            // General rules
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'prefer-const': 'warn',
        },
    },

    {
        ignores: ['dist/', 'node_modules/', '*.config.js'],
    },
];
