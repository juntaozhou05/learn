### 一：计算两个数组的交集、差集、并集、补集

```
var a = [1,2,3,4,5]
var b = [2,4,6,8,10]
console.log("数组a：", a);
console.log("数组b：", b);

var sa = new Set(a);
var sb = new Set(b);

// 交集
let intersect = a.filter(x => sb.has(x));

// 差集
let minus = a.filter(x => !sb.has(x));

// 补集
let complement  = [...a.filter(x => !sb.has(x)), ...b.filter(x => !sa.has(x))];

// 并集
let unionSet = Array.from(new Set([...a, ...b]));

console.log("a与b的交集：", intersect);
console.log("a与b的差集：", minus);
console.log("a与b的补集：", complement);
console.log("a与b的并集：", unionSet);
```
