var c=1;
function count(){
 if(c<11){
   console.log(c++);
 }else{
   return ;
 }
}
setInterval(count,1000);
