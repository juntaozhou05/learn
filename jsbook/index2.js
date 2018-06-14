// var obj = {
//   a: 1,
//   getA() {
//     console.log(this == obj);
//     console.log(this.a);
//   }
// };

// obj.getA();
/*this 指向*/
//window.name = "globalName";
// var getName = function() {
//   return this.name;
// };
// console.log(getName());
// var myObject = {
//   name: "my",
//   getName: function() {
//     return this.name;
//   }
// };
// var getName = myObject.getName;
// console.log(getName()); //globalName
// console.log(myObject.getName()); //my

// var myClass = function(name) {
//   this.name = name;
//   return {
//     name: "123"
//   };
// };
// var obj = new myClass("obj");
// console.log(obj.name);

// var obj1 = {
//   name: "sven",
//   getName: function() {
//     return this.name;
//   }
// };
// var obj2 = {
//   name: "anne"
// };

// console.log(obj1.getName());
// console.log(obj1.getName.call(obj2));

/*自己实现一个简化版的bind*/
// Function.prototype.bind = function(context) {
//   var that = this;
//   return function() {
//     return that.apply(context, arguments);
//   };
// };
// var obj = {
//   name: "obj"
// };
// var fun = function() {
//   console.log(this.name);
// }.bind(obj);
// fun(); //obj

/*自己实现一个复杂的bind*/
// Function.prototype.bind = function() {
//   let that = this;
//   let context = [].shift.call(arguments);
//   let args = [].slice.call(arguments);
//   return function() {
//     return that.apply(context, [].concat(args, [].slice.call(arguments)));
//   };
// };
// Function.prototype.bind = function() {
//   var that = this;
//   var context = [].shift.call(arguments); //第一个参数为绑定对象this
//   var args = [].slice.call(arguments); //把剩余的参数转换为数组
//   return function() {
//     return that.apply(context, [].concat(args, [].slice.call(arguments)));
//   };
// };

// var obj = {
//   name: "obj"
// };
// var fun = function(a, b, c, d) {
//   console.log(this.name);
//   console.log([a, b, c, d]);
// }.bind(obj, 1, 2);
// fun(3, 4);
// (function() {
//   Array.prototype.push.call(arguments, 3);
//   console.log(arguments);
// })(1, 2);
