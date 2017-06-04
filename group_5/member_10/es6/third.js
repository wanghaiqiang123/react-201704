var num = 0
function count(){
  var time = setTimeout(() => {
     num ++;
     count();
     console.log(num)
   },1000)
  if(num == 10) {
    clearTimeout(time)
    time = 0;
  }
}
count()
