// var Plane = function() {};
// Plane.prototype.fire = function() {
//   console.log("发射普通子弹");
// };
// var MissileDecorator = function(plane) {
//   this.plane = plane;
// };
// MissileDecorator.prototype.fire = function() {
//   this.plane.fire();
//   console.log("发射导弹");
// };
// var AtomDecorator = function(plane) {
//   this.plane = plane;
// };
// AtomDecorator.prototype.fire = function() {
//   this.plane.fire();
//   console.log("发射原子弹");
// };
// let plane = new Plane();
// plane = new MissileDecorator(plane);
// plane = new AtomDecorator(plane);
// plane.fire();

// Function.prototype.before = function(beforeFn) {
//   let that = this;
//   return function() {
//     beforeFn.apply(this, arguments);
//     return that.apply(this, arguments);
//   };
// };
// Function.prototype.after = function(afterFn) {
//   let that = this;
//   return function() {
//     let ret = that.apply(this, arguments);
//     afterFn.apply(this.arguments);
//     return ret;
//   };
// };
