/*策略模式*/
// var performanceS = function() {};
// performanceS.prototype.calculate = function(salary) {
//   return salary * 4;
// };
// var performanceA = function() {};
// performanceA.prototype.calculate = function(salary) {
//   return salary * 3;
// };
// var performanceB = function() {};
// performanceB.prototype.calculate = function(salary) {
//   return salary * 2;
// };
// var Bonus = function() {
//   this.salary = null;
//   this.strategy = null;
// };
// Bonus.prototype.setSalary = function(salary) {
//   this.salary = salary;
// };
// Bonus.prototype.setStrategy = function(strategy) {
//   this.strategy = strategy;
// };
// Bonus.prototype.getBonus = function() {
//   return this.strategy.calculate(this.salary);
// };
// var bonus = new Bonus();
// bonus.setSalary(10000);
// bonus.setStrategy(new performanceS()); // 设置策略对象
// console.log(bonus.getBonus()); // 输出：40000
// bonus.setStrategy(new performanceA()); // 设置策略对象
// console.log(bonus.getBonus()); // 输出：30000

/*js版的策略模式*/
// var strategies = {
//   S: function(salary) {
//     return salary * 4;
//   },
//   A: function(salary) {
//     return salary * 3;
//   },
//   B: function(salary) {
//     return salary * 2;
//   }
// };
// var calcuateBonus = function(level, salary) {
//   return strategies[level](salary);
// };
// console.log(calcuateBonus("A", 200));

/*策略模式验证*/
// class Strategies {
//   constructor() {}
//   isNonEmpty(value, error) {
//     if (value === "") {
//       return error;
//     }
//   }
//   minLength(value, length, error) {
//     if (value.length < length) {
//       return error;
//     }
//   }
// }

// class Validator {
//     constructor() {
//         this.cache = [];
//     }
//     add(dom,rules) {
//         for(let i=0,rule;rule = rules[i+1];) {
//             (function(rule) {
//                 let strategyAry = rule.strategy.split(":");
//                 let error = rule.error;
//                 this.cache.push(fun)
//             })(rule)
//         }
//     }
// }
/*简化*/
// let S = function(salary) {
//   return salary * 4;
// };
// let A = function(salary) {
//   return salary * 3;
// };
// let B = function(salary) {
//   return salary * 2;
// };
// let caluate = function(fn, salary) {
//   return fn(salary);
// };
// console.log(caluate(A, 100));
