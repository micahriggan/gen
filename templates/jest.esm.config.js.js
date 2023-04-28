module.exports = {
    extensionsToTreatAsEsm: ['.ts'],
    verbose: true,
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    testRegex: '/tests/.*\.(test|spec)?\.(ts|tsx|js)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePathIgnorePatterns: ["ts_build"]
};

