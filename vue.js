module.exports = {
    extends: [
        "plugin:vue/essential",
        'eslint:recommended',
        './base'
    ],
    plugins: ['vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        "parser": "@babel/eslint-parser",
        sourceType: 'module',
        "ecmaVersion": 2021,
        requireConfigFile: false,
        babelOptions: {
            plugins: [
                [
                    "@babel/plugin-proposal-decorators",
                    {
                        "legacy": true
                    }
                ]
            ]
        },
    },
    globals: {
        "__WEEX__": true,
        "WXEnvironment": true
    }
}
