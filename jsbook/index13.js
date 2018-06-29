/*职责链模式*/
// const order500 = function(orderType, pay, stock) {
//   if (orderType === 1 && pay === true) {
//     console.log(`${stock}预约 100优惠`);
//   } else {
//     order200(orderType, pay, stock);
//   }
// };

// const order200 = function(orderType, pay, stock) {
//   if (orderType === 2 && pay === true) {
//     console.log(`${stock}预约 50优惠`);
//   }
// };

// const orderNormal = function(orderType, pay, stock) {
//   if (stock > 0) {
//     console.log(`普通${stock}`);
//   } else {
//     console.log(`库存不足`);
//   }
// };

// order500(1, true, 500);
/*改写职责链*/
// const order500 = function(orderType, pay, stock) {
//   if (orderType === 1 && pay === true) {
//     console.log(`${stock}定金 100优惠`);
//   } else {
//     return "next";
//   }
// };
// const order200 = function(orderType, pay, stock) {
//   if (orderType === 2 && pay === true) {
//     console.log(`${stock}定金 50优惠`);
//   } else {
//     return "next";
//   }
// };
// const orderNormal = function(orderType, pay, stock) {
//   if (stock > 0) {
//     console.log("普通");
//   } else {
//     return "next";
//   }
// };
// class Chain {
//   constructor(fn) {
//     this.fn = fn;
//     this.successor = null;
//   }
//   setNextSuccessor(successor) {
//     return (this.successor = successor);
//   }
//   passRequest() {
//     const ret = this.fn.apply(this, arguments);
//     if (ret === "next") {
//       return (
//         this.successor &&
//         this.successor.passRequest.apply(this.successor.arguments)
//       );
//     }
//     return ret;
//   }
// }
// var chainOrder500 = new Chain(order500);
// var chainOrder200 = new Chain(order200);
// var chainOrderNormal = new Chain(orderNormal);

// chainOrder500.setNextSuccessor(chainOrder200);
// chainOrder200.setNextSuccessor(chainOrderNormal);

// chainOrder500.passRequest(1, true, 500); // 输出：500 元定金预购，得到100 优惠券
// chainOrder500.passRequest(2, true, 500); // 输出：200 元定金预购，得到50 优惠券
// chainOrder500.passRequest(3, true, 500); // 输出：普通购买，无优惠券
// chainOrder500.passRequest(1, false, 0); // 输出：手机库存不足

/*简化版*/
// Function.prototype.after = function(fn) {
//   const self = this;
//   return function() {
//     const ret = self.apply(this, arguments);
//     if (ret === "next") {
//       return fn.apply(this, arguments);
//     }
//   };
// };

// const order = order500.after(order200).after(orderNormal);
// order(1, true, 500);
