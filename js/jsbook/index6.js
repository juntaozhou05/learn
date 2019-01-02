/*代理图片*/
// let myImage = (function() {
//   let imgNode = document.createElement("img");
//   document.body.appendChild(imgNode);
//   return {
//     setSrc: function(src) {
//       imgNode.src = src;
//     }
//   };
// })();

// let proxyImage = (function() {
//   let img = new Image();
//   img.load = function() {
//     myImage.setSrc(this.src);
//   };
//   return {
//     setSrc: function(src) {
//       myImage.setSrc(src);
//       img.src = src;
//     }
//   };
// })();

// proxyImage.setSrc(
//   "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1303128408,237910056&fm=173&app=25&f=JPEG?w=218&h=146&s=E2925589546415AF0A55CCD1030050B2"
// );
/*计算乘积*/
// let mult = function() {
//   console.log("开始");
//   let a = 1;
//   for (let i = 0, l = arguments.length; i < l; i++) {
//     a = a * arguments[i];
//   }
//   return a;
// };
// // console.log(mult(2, 3));
// //缓存代理
// let proxyMult = (function() {
//   let cache = {};
//   return function() {
//     let args = Array.prototype.join.call(arguments, ",");
//     if (args in cache) {
//       return cache[args];
//     }
//     console.log(arguments);
//     return (cache[args] = mult.apply(this, arguments));
//   };
// })();
// console.log(proxyMult(1, 2, 3, 4));

/*缓存代理工厂*/
let createProxyFactory = function(fn) {
  let cache = {};
  return function() {
    let args = Array.prototype.join.call(arguments, ",");
    if (args in cache) {
      return cache[args];
    }
    return (cache[args] = fn.apply(this.arguments));
  };
};
