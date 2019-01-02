/*闭包*/
// var fun = function() {
//   var a = 1;
//   return function() {
//     a++;
//     console.log(a);
//   };
// };
// var f = fun();
// f();
// f();
// f();

/*相乘*/
// var mult = (function() {
//   var cache = {};
//   return function() {
//     var args = Array.prototype.join.call(arguments, ",");
//     console.log(typeof args); //string
//     if (args in cache) {
//       return cache[args];
//     }
//     var a = 1;
//     for (var i = 0; i < arguments.length; i++) {
//       a = a * arguments[i];
//     }
//     return (cache[args] = a);
//   };
// })();
//进一步封装
// var mult = (function() {
//   var cache = {};
//   var calculate = function() {
//     var a = 1;
//     for (var i = 1; i < arguments.length; i++) {
//       a = a * arguments;
//     }
//     return a;
//   };
//   return function() {
//     var args = Array.prototype.join.call(arguments, ",");
//     if (args in cache) {
//       return cache[args];
//     }
//     return (cache[args] = calculate.apply(null, arguments));
//   };
// })();

// mult(1, 2, 4);

/*判断数据类型*/
// console.log(Object.prototype.toString.call([1, 2, 3])); //[object Array]
// console.log(Object.prototype.toString.call("123")); //[object String]
// console.log(Object.prototype.toString.call({ a: 2 })); //[object Object]

/*AOP*/
// Function.prototype.before = function(beforeFn) {
//   var that = this;
//   return function() {
//     beforeFn.apply(this, arguments);
//     return that.apply(this, arguments);
//   };
// };
// Function.prototype.after = function(afterFn) {
//   var that = this;
//   return function() {
//     var ret = that.apply(this, arguments);
//     afterFn.apply(this, arguments);
//     return ret;
//   };
// };

// var func = function() {
//   console.log(2);
// };
// func = func
//   .before(function() {
//     console.log(1);
//   })
//   .after(function() {
//     console.log(3);
//   });

// func();

/*currying*/
// let mothlycost = 0;
// var cost = function(money) {
//   return (mothlycost += money);
// };
// cost(100);
// cost(200);
// console.log(cost(300));

// var currying = function(fn) {
//   var args = [];
//   return function() {
//     if (arguments.length === 0) {
//       return fn.apply(this, args);
//     } else {
//       [].push.apply(args, arguments);
//       return arguments.callee;
//     }
//   };
// };
// var cost = (function() {
//   var money = 0;
//   return function() {
//     for (var i = 0, l = arguments.length; i < l; i++) {
//       money += arguments[i];
//     }
//     return money;
//   };
// })();
// var cost = currying(cost); // 转化成currying 函数
// cost(100); // 未真正求值
// cost(200); // 未真正求值
// cost(300); // 未真正求值
// console.log(cost()); // 求值并输出：600

/*uncurrying*/
// Function.prototype.uncurring = function() {
//   let self = this;
//   return function() {
//     let obj = Array.prototype.shift.call(arguments);
//     return self.apply(obj, arguments);
//   };
// };

// var push = Array.prototype.push.uncurring();
// (function() {
//   push(arguments, 4);
//   console.log(arguments);
// })(1, 2, 3);
//另一种实现uncurrying
// Function.prototype.uncurrying = function() {
//   var self = this;
//   return function() {
//     return Function.prototype.call.apply(self, arguments);
//   };
// };

/*函数节流*/
