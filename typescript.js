module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        './base'
    ],
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                warnOnUnsupportedTypeScriptVersion: true,
            },
            plugins: ['@typescript-eslint'],
            rules: {
                /** @typescript-eslint/eslint-plugin recommended配置 start  */
                '@typescript-eslint/adjacent-overload-signatures': 'error',
                '@typescript-eslint/ban-ts-comment': 'error',
                '@typescript-eslint/ban-types': 'error',
                '@typescript-eslint/explicit-module-boundary-types': 'warn',
                'no-array-constructor': 'off',
                '@typescript-eslint/no-array-constructor': 'error',
                'no-empty-function': 'off',
                '@typescript-eslint/no-empty-function': 'error',
                '@typescript-eslint/no-empty-interface': 'error',
                '@typescript-eslint/no-extra-non-null-assertion': 'error',
                'no-extra-semi': 'off',
                '@typescript-eslint/no-extra-semi': 'error',
                '@typescript-eslint/no-inferrable-types': 'error',
                '@typescript-eslint/no-misused-new': 'error',
                '@typescript-eslint/no-namespace': 'error',
                '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
                '@typescript-eslint/no-non-null-assertion': 'warn',
                '@typescript-eslint/no-this-alias': 'error',
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': 'warn',
                '@typescript-eslint/no-var-requires': 'error',
                '@typescript-eslint/prefer-as-const': 'error',
                '@typescript-eslint/prefer-namespace-keyword': 'error',
                '@typescript-eslint/triple-slash-reference': 'error',
                /** @typescript-eslint/eslint-plugin recommended配置 end  */
                // 变量名不强制驼峰
                "@typescript-eslint/camelcase": 0,
                // 函数返回值 需要指定类型
                "@typescript-eslint/explicit-module-boundary-types": 0,
                // 允许非空断言运算符 !
                "@typescript-eslint/no-non-null-assertion": 0,
                // 分隔符样式，分号结尾
                "@typescript-eslint/member-delimiter-style": [
                    1,
                    {
                        multiline: {
                            delimiter: "semi",
                            requireLast: true,
                        },
                        singleline: {
                            delimiter: "semi",
                            requireLast: true,
                        },
                    },
                ],
                // 禁止空interface，有继承的除外
                "@typescript-eslint/no-empty-interface": [
                    1,
                    {
                        allowSingleExtends: true,
                    },
                ],
                // 支持特定类型 String  Function 等
                "@typescript-eslint/ban-types": 0,
                '@typescript-eslint/no-unused-vars': [1],
                "@typescript-eslint/interface-name-prefix": 0,
                "@typescript-eslint/explicit-function-return-type": 0,
                // 禁止出现空函数
                "@typescript-eslint/no-empty-function": 0,
                "@typescript-eslint/no-var-requires": 0,
                "@typescript-eslint/no-use-before-define": 0,
                // 可以自动推断的类型 如 number 、boolean 、string 等 也能写类型
                "@typescript-eslint/no-inferrable-types": 0,
                // 不允许写any 用 unknown 代替 any，一定要写any可以在代码上方写注释 eslint-disable-next-line 进行忽略本行校验
                "@typescript-eslint/no-explicit-any": 0,
                // 允许使用@ts-<directive>注释或在指令后要求描述
                "@typescript-eslint/ban-ts-comment": 0,
                // Interface 名称必须是驼峰  关闭
                "@typescript-eslint/class-name-casing": 0,
                // 允许@ts-ignore
                "@typescript-eslint/ban-ts-ignore": 0,
                // 冒号前没有空格，后有空格, => 箭头前后都有空格
                "@typescript-eslint/type-annotation-spacing": [
                    1,
                    {
                        before: false,
                        after: true,
                        overrides: { arrow: { before: true, after: true } },
                    },
                ],
                '@typescript-eslint/space-infix-ops': [1, { 'int32Hint': false }],
            },
        },
    ]
}
