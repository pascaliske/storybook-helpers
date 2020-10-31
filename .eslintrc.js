module.exports = {
    root: true,
    extends: '@pascaliske/eslint-config/typescript',
    parserOptions: {
        project: `${__dirname}/tsconfig.test.json`,
        createDefaultProgram: true,
    },
    env: {
        browser: true,
        node: true,
    },
}
