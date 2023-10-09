### 解决的问题

- 统一团队代码规范，解决一些潜在bug

### 修改流程

- 安装公用规则包

``` javascript
npm install eslint-config-tntd --save-dev
```

- 升级eslint版本到8以上

``` javascript
npm install eslint@^8.13.0 --save-dev
```

- 在package.json 同级目录新增.eslintrc(如已有则修改里面内容即可)

``` javascript
{
 // react工程使用["tntd/react"] vue工程使用["tntd/vue"]
 // typescript项目可以在后面添加typescript规则
 // "extends":["tntd/react", "tntd/typescript"],
    "extends":["tntd/react"],
 // 这里可以覆盖规则包里面的规则，比如默认每个函数最长不超过200，如果老项目超过了，就可以自定义修改
    "rules": {
        // 函数最长是300行
        "max-lines-per-function": ["error", { "max": 300, "skipBlankLines": true, "skipComments": true }],
    }
}
```

- vscode安装eslint插件，同时在设置里面配置信息如下，可以在编写代码的时候自动帮忙fixed一些问题

``` javascript
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll": true
}
```

- 在package.json的scripts里面增加命令

``` javascript
// --max-warnings 0 这个0可以改为其他数字，但是最好还是将问题修复掉
"eslint-fixed": "npx eslint --max-warnings 0 --fix --ext .js,.jsx,.ts,.tsx,.vue ./src"
```

- eslint 自动修复,执行以下命令

``` javascript
npm run eslint-fixed
```

- 执行完以上步骤，eslint会将基础的问题，比如空格/分号/引号/import顺序等问题自动修复，另外一些需要自己手动修复。
