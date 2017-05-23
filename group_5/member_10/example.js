var obj = {
	name: 'fangbao',
	age: 12
}

var {name, age} = obj;
name = "gyr";
setTimeout(()=>{
	console.log(name)
}, 100)
