/*
 * @Descripttion: 基础公用配置
 * @Author: 郑泳健
 * @Date: 2022-04-11 17:32:00
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-07-18 13:44:58
 */
"use strict";
module.exports = {
    plugins: ["import", "prettier"],
    extends: ["plugin:prettier/recommended"],
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        es2021: true,
        jest: true,
        amd: false,
        mocha: false,
        jasmine: false,
    },
    globals: {
        define: true,
        module: true,
    },
    rules: {
        // 不允许在 case 子句中使用词法声明
        "no-case-declarations": 1,
        // 禁用 alert、confirm 和 prompt
        "no-alert": 1,
        // 强制把变量的使用限制在其定义的作用域范围内
        "block-scoped-var": 1,
        // 禁止数字字面量中使用前导和末尾小数点
        "no-floating-decimal": 1,
        // 禁止使用短符号进行类型转换 忽略 !!
        "no-implicit-coercion": [1, { allow: ["!!"] }],
        // 禁止对函数参数再赋值
        "no-param-reassign": 1,
        // 禁止使用多个空格
        "no-multi-spaces": 1,
        // 禁用不必要的 .call() 和 .apply()
        "no-useless-call": 1,
        // 禁用嵌套的三元表达式 可读性很差
        "no-nested-ternary": 0,
        // 禁止多余的 return 语句
        "no-useless-return": 1,
        // 禁止可以表达为更简单结构的三元操作符
        "no-unneeded-ternary": 1,
        // 禁止在返回语句中赋值
        "no-return-assign": [1, "always"],
        // 要求 for-in 循环中有一个 if 语句  {}.hasOwnProperty.call(foo, key)
        "guard-for-in": 0,
        // 禁止将 await 写在循环里
        "no-await-in-loop": 0,
        // 禁止不必要的布尔转换
        "no-extra-boolean-cast": 0,
        // 导出不能只有一个default
        "import/no-anonymous-default-export": 0,
        // 禁止直接调用 Object.prototypes 的内置属性
        "no-prototype-builtins": 1,
        // 禁止不规则的空白
        "no-irregular-whitespace": 1,
        // 要求使用扩展运算符而非 .apply()
        "prefer-spread": 0,
        // 禁止使用 __proto__
        "no-proto": 1,
        // 禁止使用 __iterator__
        "no-iterator": 1,
        // if 后面必须要有 {，除非是单行 if
        curly: [1, "multi-line", "consistent"],
        // 必须使用 isNaN(foo) 而不是 foo === NaN
        "use-isnan": 2,
        // 禁止将 await 或 yield 的结果做为运算符的后面项
        "require-atomic-updates": 1,
        // 禁止出现难以理解的多行表达式
        "no-unexpected-multiline": 1,
        // 禁止在普通字符串中出现模版字符串里的变量形式，如 'Hello ${name}!'
        "no-template-curly-in-string": 1,
        // 禁止在数组中出现连续的逗号，如 let foo = [,,]
        "no-sparse-arrays": 0,
        // 禁止在 if 代码块内出现函数声明
        "no-inner-declarations": 0, //[1, "both"],
        // 禁止出现空代码块，允许 catch 为空代码块
        "no-empty": [
            2,
            {
                allowEmptyCatch: true,
            },
        ],
        // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
        "for-direction": 1,
        // 箭头函数箭头前后加空格
        "arrow-spacing": 1,
        // 是否允许非空数组里面有多余的空格
        "array-bracket-spacing": [1, "never"],
        // 强制驼峰法命名
        camelcase: 0,
        // 循环复杂度
        complexity: [0, 11],
        // 必须使用全等
        eqeqeq: 1,
        // 缩进风格
        indent: 0,
        // indent: [1, 4, { SwitchCase: 1, ignoredNodes: ["TemplateLiteral"] }],
        // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
        "new-cap": 0,
        "max-lines": 0,
        "max-lines-per-function": 0,
        // 禁止使用数组构造器
        "no-array-constructor": 1,
        // 禁止在条件表达式中使用赋值语句
        "no-cond-assign": 0, // ["warn", "always"],
        // 禁止catch子句参数与外部作用域变量同名
        "no-catch-shadow": 0,
        // 禁止给类赋值
        "no-class-assign": 1,
        // 禁止在条件中使用常量表达式
        "no-constant-condition": 1,
        // 禁debugger
        "no-debugger": 2,
        "no-console": 1,
        // 如果if语句里面有return,后面不能跟else语句
        "no-else-return": 2,
        // 禁止对null使用==或!=运算符
        "no-eq-null": 2,
        // 禁止非必要的括号
        "no-extra-parens": 0, //[1, "all", { nestedBinaryExpressions: false }],
        // 禁止多余的冒号
        "no-extra-semi": 2,
        // 禁止重复的函数声明
        "no-func-assign": 2,
        // 禁止重复模块导入
        "no-duplicate-imports": 2,
        // 禁止无效的this，只能用在构造器，类，对象字面量
        "no-invalid-this": 0,
        // 禁止混用tab和空格
        "no-mixed-spaces-and-tabs": [1, "smart-tabs"],
        // 空行最多不能超过1行
        "no-multiple-empty-lines": [1, { max: 2 }],
        // 禁止使用new require
        "no-new-require": 1,
        // 函数调用时 函数名与()之间不能有空格
        "no-spaced-func": 1,
        // 一行结束后面不要有空格
        "no-trailing-spaces": 1,
        // 变量初始化时不能直接给它赋值为undefined
        "no-undef-init": 1,
        // 禁用void操作符
        "no-void": 0,
        // 变量声明后是否需要空一行
        "newline-after-var": 0,
        // 换行时运算符在行尾还是行首
        "operator-linebreak": 0, //[1, "after"],
        radix: "warn",
        // 语句强制分号结尾
        semi: [1, "always"],
        // 分号前后空格
        "semi-spacing": [0, { before: false, after: true }],
        // 中缀操作符周围要不要有空格
        "space-infix-ops": 1,
        // 注释风格要不要有空格什么的
        "spaced-comment": 0,
        // var必须放在作用域顶部
        "vars-on-top": 1,
        // 块级{}前后空格
        // "block-spacing": 0,
        // 禁止或强制在代码块中开括号前和闭括号后有空格
        "block-spacing": [1, "always"],
        // 大括号两端空格空格 {a:a}-> { a:a }
        "object-curly-spacing": [1, "always"],
        // 保证属性简写被使用 (键和变量名称相匹配的情况) { a: a}->{a}
        "object-shorthand": [1, "properties"],
        // 要求在逗号后使用一个或多个空格
        "comma-spacing": [1],
        // 强制所有不包含双引号的 JSX 属性值使用双引号
        "jsx-quotes": [1],
        // 禁止在对象字面量的键和冒号之间存在空格{a:a}-> {a: a}
        "key-spacing": [1, { beforeColon: false }],
        // 强制行的每一行最大长度
        "max-len": 0,
        // "max-len": [
        //     1,
        //     {
        //         code: 140,
        //         // 忽略所有拖尾注释和行内注释
        //         ignoreComments: true,
        //         // 忽略包含URL的行
        //         ignoreUrls: true,
        //         // 忽略含有双引号或单引号字符串的行
        //         ignoreStrings: true,
        //         // 忽略包含模板字面量的行
        //         ignoreTemplateLiterals: true,
        //         // 忽略包含正则表达式的行
        //         ignoreRegExpLiterals: true,
        //     },
        // ],
        // 导入包排序
        // "import/order": [
        //     "error",
        //     {
        //         groups: [
        //             "builtin",
        //             "external",
        //             "unknown",
        //             "parent",
        //             "sibling",
        //             "index",
        //         ],
        //         pathGroups: [
        //             {
        //                 pattern: "@/**",
        //                 group: "unknown",
        //             },
        //             {
        //                 pattern: "@yt/**",
        //                 group: "external",
        //                 position: "after",
        //             },
        //         ],
        //         pathGroupsExcludedImportTypes: ["builtin"],
        //     },
        // ],
        // 尽可能地使用单引号
        quotes: [2, "single"],
        // 注释必须要在代码上方
        "line-comment-position": 0,
        // 可以用 const的 优先使用const，暂时关闭，有些按引用传递的变量写法比较怪异
        "prefer-const": 0,
        // TODO 函数参数定义了未使用的变量 有些变量顺序调整了会有影响，暂时关闭
        "no-unused-vars": [
            "warn",
            {
                varsIgnorePattern: "React",
            },
        ],
        // 在调用之前声明 关闭
        "no-use-before-define": 0,
        // enum空格风格 a = 1  非 a=1 a =1 a= 1
        "space-infix-ops": "off",
        // props 校验
        "react/prop-types": 0,
        // 原型内置方法可以使用
        "no-prototype-builtins": 0,
        // 循环中包含一个if语句
        "guard-for-in": 0,
        // 可以修改入参的值
        "no-param-reassign": 0,
        // 可以使用apply
        "prefer-spread": 0,
        "template-curly-spacing": "off",
        // 顶部可以不用引入React
        "react/react-in-jsx-scope": 0,
        // 正则转义
        "no-useless-escape": 0,
        "no-empty-pattern": 0,
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off",
        "comma-dangle": 0,
        "require-yield": 0
    },
};
