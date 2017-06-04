function Animal1 (name, gender, age) {
  this.name = name
  this.gender = gender
  this.age = age
}
Animal1.prototype = {
  getInfo: function () {
    var str = 'A' + ' ' + this.age + ' years old ' + this.gender +  ' ' + this.name
    console.log(str)
  }
}
var animal = new Animal1 ('cat', 'male', 'two')
animal.getInfo()
