module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "./base",
    ],
    plugins: ["react", "jsx-a11y", "react-hooks"],
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        requireConfigFile: false,
        babelOptions: {
            presets: [require.resolve("babel-preset-react-app/prod")],
            plugins: [
                [
                    "@babel/plugin-proposal-decorators",
                    {
                        legacy: true,
                    },
                ],
            ],
        },
    },
    rules: {
        // 禁止直接修改 state
        "react/no-direct-mutation-state": 1,
        // 属性不能有空格
        "react/jsx-equals-spacing": [1, "never"],
        // 多行属性才换行
        "react/jsx-first-prop-new-line": [1, "multiline-multiprop"],
        // 循环元素必须有key
        "react/jsx-key": 1,
        // jsx结束标签对齐
        "react/jsx-closing-bracket-location": 0, // [1, "line-aligned"],
        // jsx return 值强制用括号括起来
        "react/jsx-wrap-multilines": 0,
        // 带有target='_blank' 的a标签不强制填写 rel='noreferrer'
        "react/jsx-no-target-blank": 0,
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        ],
        // react 结束标签自动闭合
        "react/self-closing-comp": 1,
        // react 属性间最多一个空格
        "react/jsx-props-no-multi-spaces": 0,
        // react 识别不认识的属性 class --> className
        "react/no-unknown-property": 1,
        // a 标签 可不填href
        "jsx-a11y/anchor-is-valid": 0,
        // 检查 Hook 的规则
        "react-hooks/rules-of-hooks": 0,
        // 检查 effect 的依赖
        "react-hooks/exhaustive-deps": 0,
        // react组件不需要写dispalyName
        "react/display-name": 0,
        "react/no-unescaped-entities": 0,
        // react 不能用this.ref
        "react/no-string-refs": 0,
    },
};
