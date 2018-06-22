/*迭代器*/
// var each = function(ary, callback) {
//   for (var i = 0, l = ary.length; i < l; i++) {
//     callback.call(ary[i], i, ary[i]); // 把下标和元素当作参数传给callback 函数
//   }
// };
// each([1, 2, 3], function(i, n) {
//   console.log(i, n);
// });
/*数组迭代*/
// Array.prototype.eachs = function(callback) {
//   for (let i = 0, l = this.length; i < l; i++) {
//     callback(i, this[i]);
//   }
// };

// [1, 2, 3, 4].eachs(function(index, key) {
//   console.log(index, key);
// });
