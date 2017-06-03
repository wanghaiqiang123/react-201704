### 箭头函数
- 注意this: 箭头函数没有this 所以箭头函数内部的this就是外层代码的this
- 不可使用arguments
### 类
- ES6的class只是面向对象编程的语法糖 升级了ES5的构造函数的原型链继承的写法,并没有解决模块化问题
- class 类名 {1.方法之间不需要用“,” 2.方法不需要嫁function}
```
lass Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } // 不需要标点
  getMessage() { // 不需要🏠function
    console.log("我的名字是" + this.name + "我的年龄是" + this.age);
  }
}
```

- constructor 构造方法 (this代表当前实例)
- 类本身指向构造函数
```
console.log(Person1 === Person1.prototype.constructor)
```
- 在类的实例上面调用方法相当于调用原型上的方法
```
Person1.prototype = {
  getMessage(){}  
}
```
- assign Object.assign方法可以很方便地一次向类prototype添加多个方法
```
Object.assign(Person1.prototype, {
  getPerson() {
    console.log("我是通过Object.assign给类的原型上添加方法的")
  }
})
```
- extends继承 super()指向父类的构造函数
```
class Child extends Person1 {
  constructor (name, age, sex) {
    super(name, age)
    this.sex = sex;
  }
  getChild() {
    console.log(this.name + this.age + this.sex + "我是继承person1的")
  }
}
```
### 对象字面量
```
var a = 1, b = 'str', fn = (m, n) => { console.log(m + n) };
var obj = { a, b, fn };
```
```
var obj1 = {
  c: 1,
  fn: function getName() {
    // es5写法
  },
  getName () {
    console.log(this.c)
  }
}
```
### 模板字符串
```
var name = 'gyr', age = 18
var str = `${name} is ${age}`
var strHtml = `<div>
                <h1>${name}</h1>
                <p>${age}</p>
              </div>`
```
### 解构赋值
```
var ary = ['a', 'b', 'c']
var [a, ,c] = ary
var obj = {
  fn: function(){console.log("aa")},
  b: [1, 2, 3]
}
var { fn, b } = obj
import { 组件1, 组件2 } from '文件导出这些属性'
```
### 默认参数(Default) 任意参数(Rest) 扩展运算符(Spread)
```
function getMag(name,age=18) {
  console.log(`${name} is ${age}`)
}
getMag('gyr')
function getRest(obj,...keys){
  console.log(arguments ) // 所以参数
  console.log(keys) // 不定参数 相当于解构
  console.log(...keys) // 数组展开 ...
}
var data = {a: 1, b: 2}
getRest(data,name,age,'gyr')
```
### let const
- const 一般常用在定义常量表示接口
### 模块
- mudules 模块化 使用webpack将模块打包
