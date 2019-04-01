/*
变量提升 a
b xxaa
*/

var a = 4;
function b(x, y, a) {
  //形参赋值  x=1 y=2 a=3
  //变量提升
  //arguments:{0:1,1:2,2:3,length:3,callee:b函数本身}
  //在js非严格模式下函数中的形参变量和arguments存在映射关系(相互影响)
  console.log(a); //3
  arguments[2] = 10; //a也变为10
  console.log(a); //10
}

a = b(1, 2, 3); //b执行没有返回结果
console.log(a); //undefined

function fn(x, y) {
  //形参 x=10 y=undefined y也是私有变量 赋值为undefined
  //arg:{0:10,length:1}
  //如果arg里没有索引  就不会映射
  var arg = arguments;
  arg[0] = 100;
  console.log(x); //100
  y = 200;
  console.log(arg[1]); //undefined
}
fn(10);
