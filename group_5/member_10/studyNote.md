### babel
- 转码器
#### 作用
- es6/7 -> es5
- jsx 静态类型流式语法检查
- 拆分:整个babel拆分成几个核心的包
- plugin
- preset: 多个plugin结合起来
#### 结合(生态)
- webpack
- gulp
#### .babelrc配置文件
- 设置转码规则和插件
`{
  "presets": [
      "es2015",
      "react",
      "stage-0"
    ],//设定转码规则
  "plugin": []
  }`
##### 转码规则 presets
- ES2015 `npm install --save-dev babel-preset-es2015`
- react `npm install --save-dev babel-preset-react`
- stage-0/1/2/3 ES7有4个阶段 `npm install --save-dev babel-preset-stage-0/1/2/3`
##### 插件 plugins
#### 不支持ES6原生的方法编码(支持的是ES6语法转码)
### babel-cli 安装
- `npm install babel-cli -g`
- `npm install babel-cli --save-dev`
- 使用前需要配置presets:["es2015"],当然需要安装插件
- 借助npm init 生成的package.json文件 配置scripts 进行bable转码`例如"build":"babel src -d lib -w"`
#### babel-cli 命令行
- `babel 入口文件 -o 输出文件`
- `babel 入口文件名 -d 输出文件名`
#### babel-cli 自带 babel-node 命令
- 提供支持ES6运行的REPL环境(就是执行这个命令就可以直接看到ES6代码运行的结果 -> 基于node)
### babel-polyfill
- 支持ES6API使用 需要在生产环境 在入口提前引入
