/** @type {import('jest').Config} */
export default {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/testUtils/test.setup.ts'],
    transform: {
        '^.+\\.[tj]sx?$': [
            'ts-jest',
            {
                tsconfig: {
                    jsx: 'react-jsx',
                    module: 'commonjs',
                    moduleResolution: 'node',
                    verbatimModuleSyntax: false,
                    esModuleInterop: true,
                    allowJs: true,
                    resolveJsonModule: true,
                },
            },
        ],
    },
    // These dependencies publish ESM only, so they must be transformed for Jest's CommonJS runtime.
    transformIgnorePatterns: ['node_modules/(?!(react-intl|intl-messageformat|@formatjs|lucide-react)/)'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^src/(.*)$': '<rootDir>/src/$1',
    },
    testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
};
