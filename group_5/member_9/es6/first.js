
let obj = {
    name: 'zhufeng',
    sayName: function(){
      setInterval(
        function(){
          console.log(this.name);
        }.bind(this),1000);
    }
};
obj.sayName();
