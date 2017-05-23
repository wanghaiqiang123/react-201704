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
- 存放在根目录下
- 设置转码规则和插件
`{
  "presets": [
      "es2015",
      "react",
      "stage-0"
    ],//设定转码规则
  "plugin": []
  }`
##### 转码规则
- ES2015 `npm install --save-dev babel-preset-es2015`   
- react `npm install --save-dev babel-preset-react`
- stage-0/1/2/3 ES7有4个阶段 `npm install --save-dev babel-preset-stage-0/1/2/3`
#### 不支持ES6原生的方法编码
