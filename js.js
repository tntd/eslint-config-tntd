module.exports = {
    extends: [
        "eslint:recommended",
        "./base",
    ],
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        requireConfigFile: false,
        babelOptions: {
            plugins: [
                [
                    "@babel/plugin-proposal-decorators",
                    {
                        legacy: true,
                    },
                ],
            ],
        },
    }
};
