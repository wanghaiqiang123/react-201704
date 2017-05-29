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
