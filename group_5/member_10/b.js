"use strict";

var obj = {
	name: 'fangbao',
	age: 12
};

var name = obj.name,
    age = obj.age;

name = "gyr";
setTimeout(function () {
	console.log(name);
}, 100);
