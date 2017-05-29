### 箭头函数
- 注意this: 箭头函数没有this 所以箭头函数内部的this就是外层代码的this
- 不可使用arguments
### 类
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
