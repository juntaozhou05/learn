/*鸭子和鸡加入*/
// const duck = {
//   duckSinging() {
//     console.log("嘎嘎");
//   }
// };
// const chicken = {
//   duckSinging() {
//     console.log("嘎嘎");
//   }
// };

// let choir = [];

// let joinChoir = function(animal) {
//   if (animal && typeof animal.duckSinging === "function") {
//     choir.push(animal);
//     console.log("加入");
//     console.log("成员" + choir.length);
//   }
// };
// joinChoir(duck);
// joinChoir(chicken);

/*多态*/
// let makeSound = function(animal) {
//   if (animal instanceof Duck) {
//     console.log("嘎嘎");
//   } else if (animal instanceof Chicken) {
//     console.log("咯咯");
//   }
// };
// let Duck = function() {};
// let Chicken = function() {};

// makeSound(new Duck());
// makeSound(new Chicken());

/*改进后的多态*/
// let makeSoud = function(animal) {
//   animal.sound();
// };

// let Duck = function() {};

// Duck.prototype.sound = function() {
//   console.log("嘎嘎");
// };

// let Chicken = function() {};

// Chicken.prototype.sound = function() {
//   console.log("咯咯");
// };

// let Dog = function() {};

// Dog.prototype.sound = function() {
//   console.log("汪汪");
// };

// makeSoud(new Duck());
// makeSoud(new Chicken());
// makeSoud(new Dog());

//原型继承
// Object.create =
//   Object.create ||
//   function(obj) {
//     var F = function() {};
//     F.prototype = obj;
//     return new F();
//   };

// var Plane = () => {
//   this.blood = 100;
//   this.attackLevel = 1;
//   this.defenseLevel = 1;
// };
// var plane = new Plane();
// plane.blood = 500;
// plane.attackLevel = 10;
// plane.defenseLevel = 7;
// var clonePlane = Object.create(plane);
// console.log(clonePlane.blood);
// plane.blood = 600;
// console.log(clonePlane.blood);

/*查看对象原型*/
// let obj1 = new Object();
// let obj2 = {};
// console.log(Object.getPrototypeOf(obj1) === Object.prototype);
// console.log(Object.getPrototypeOf(obj2) === Object.prototype);

/*构造器函数*/
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
};

// let a = new Person("a");

// console.log(a.name);
// console.log(a.getName());
// console.log(Object.getPrototypeOf(a) === Person.prototype);

/*自己实现new操作*/
// var objectFactory = function(parent, child) {
//   var obj = new Object(), // 从Object.prototype 上克隆一个空的对象
//     Constructor = [].shift.call(arguments); // 取得外部传入的构造器(第一个参数)，此例是Person
//   obj.__proto__ = Constructor.prototype; // 指向正确的原型
//   var ret = Constructor.apply(obj, arguments); // 借用外部传入的构造器给obj 设置属性
//   return typeof ret === "object" ? ret : obj; // 确保构造器总是会返回一个对象
// };

// var a = objectFactory(Person, "sven");
// console.log(a);

/*es6类*/
class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    return "woof";
  }
}

let dog = new Dog("dog");
console.log(dog.getName());
console.log(dog.speak());
