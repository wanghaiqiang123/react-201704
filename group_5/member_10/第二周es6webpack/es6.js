
import a from './modules.js'
// 箭头函数
var obj = {
  name: "gyr",
  courses: ["js", "node", "react"],
  getMsg: function () {
    console.log(this);
    // this.courses.forEach(function (item) {
    //   console.log(this);
    //   console.log(this.name + "learn" + item);
    // }.bind(this));
    this.courses.forEach((item) => {
      console.log(this); //内部this就是上下文
      console.log(this.name + "learn" + item);
    })
  }
}
obj.getMsg();

function A (a,b) {
  console.log(arguments);
}
console.dir(A);
A(1,2);
var fn = (a, b) => {
  //console.log(arguments); // 没有arguments
  return a + b;
}
console.dir(fn);
console.log(fn(1, 2));

// 类
function Person (name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype = {
  getMessage: function () {
    console.log("我的名字是" + this.name + "我的年龄是" + this.age);
  }
}
var p = new Person("gyr",18)
p.getMessage();

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getMessage() {
    console.log("我的名字是" + this.name + "我的年龄是" + this.age);
  }
}
console.log(Person1 === Person1.prototype.constructor)
Object.assign(Person1.prototype, {
  getPerson() {
    console.log("我是通过Object.assign给类的原型上添加方法的")
  }
})
var p1 = new Person1("fb",19);
p1.getMessage();
p1.getPerson();
// 继承 extends super
class Child extends Person1 {
  constructor (name, age, sex) {
    super(name, age)
    this.sex = sex;
  }
  getChild() {
    console.log(this.name + this.age + this.sex + "我是继承person1的")
  }
}
var child1 = new Child("gao", 22, "女");
child1.getChild();
child1.getPerson();

// 对象字面量方式(2种方式)
var a = 1, b = 'str', fn = (m, n) => { console.log(m + n) };
var obj = { a, b, fn };
console.log(obj);
var obj1 = {
  c: 1,
  getName () {
    console.log(this.c)
  },
  fn: function getAge() {
    console.log('es5')
  }
}
console.log(obj1)

// 模板字符串
var name = 'gyr', age = 18
var str = `${name} is ${age}`
console.log(str)
var strHtml = `<div>
                <h1>${name}</h1>
                <p>${age}</p>
              </div>`
console.log(strHtml)

// 解构赋值
var ary = ['a', 'b', 'c']
var [a, ,c] = ary
console.log(a,c)
var obj = {
  fn: function(){console.log("aa")},
  b: [1, 2, 3]
}
var { fn, b } = obj
console.log(fn,b)
// import { 组件1, 组件2 } from '文件导出这些属性'

// default rest ...
function getMag(name,age=18) {
  console.log(`${name} is ${age}`)
}
getMag('gyr')
function getRest(obj,...keys){
  console.log(arguments ) // 所以参数
  console.log(keys) // 不定参数 相当于解构
  console.log(...keys)
}
var data = {a: 1, b: 2}
getRest(data,name,age,'gyr')

// modules
