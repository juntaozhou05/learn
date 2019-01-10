### 一：let

1. 暂时性死区：在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）

“暂时性死区”也意味着 typeof 不再是一个百分之百安全的操作

```
typeof x; // ReferenceError
let x;
```

上面代码中，变量 x 使用 let 命令声明，所以在声明之前，都属于 x 的“死区”，只要用到该变量就会报错。因此，typeof 运行时就会抛出一个 ReferenceError。

作为比较，如果一个变量根本没有被声明，使用 typeof 反而不会报错。

```
typeof undeclared_variable // "undefined"
```

有些“死区”比较隐蔽，不太容易发现。

```
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错
```

因为参数 x 默认值等于另一个参数 y，而此时 y 还没有声明，属于”死区“。如果 y 的默认值是 x，就不会报错，因为此时 x 已经声明了。

另外，下面的代码也会报错，与 var 的行为不同。

```
// 不报错
var x = x;

// 报错
let x = x;
// ReferenceError: x is not defined
```

总之，暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

2. 不允许重复声明

let 不允许在相同作用域内，重复声明同一个变量。不能在函数内部重新声明参数

```
function func(arg) {
  let arg; // 报错
}

function func(arg) {
  {
    let arg; // 不报错
  }
}
```
