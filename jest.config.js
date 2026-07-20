module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    // Cuki defaults to `secure`, and jsdom only accepts secure cookies over https
    testURL: 'https://localhost/',
    roots: ['<rootDir>/tests'],
};
