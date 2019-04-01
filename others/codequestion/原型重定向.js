function Fn() {
  var n = 10;
  this.m = 20;
  this.aa = function() {
    console.log(this.m);
  };
}

Fn.prototype.bb = function() {
  console.log(this.n);
};
var f1 = new Fn();
Fn.prototype = {
  aa: function() {
    console.log(this.m + 10);
  }
};

var f2 = new Fn();
console.log(f1.constructor);
console.log(f2.constructor);
f1.bb(); //undefined
f1.aa(); //20
f2.bb(); //报错
f2.aa(); //报错
f2.__proto__.aa();
