### 一：判断一个变量为整数

1. 任何整数都会被 1 整除，即余数是 0。利用这个规则来判断是否是整数。

```
function isInteger(obj) {
 return obj%1 === 0
}
isInteger(3) // true
isInteger(3.3) // false
```

以上输出可以看出这个函数挺好用，但对于字符串和某些特殊值显得力不从心

```
isInteger('') // true
isInteger('3') // true
isInteger(true) // true
isInteger([]) // true
```

对于空字符串、字符串类型数字、布尔 true、空数组都返回了 true
因此，需要先判断下对象是否是数字，比如加一个 typeof

```
function isInteger(obj) {
 return typeof obj === 'number' && obj%1 === 0
}
isInteger('') // false
isInteger('3') // false
isInteger(true) // false
isInteger([]) // false
```

2. 使用 Math.round、Math.ceil、Math.floor 判断
   整数取整后还是等于自己。利用这个特性来判断是否是整数，Math.floor 示例，如下

```
function isInteger(obj) {
 return Math.floor(obj) === obj
}
isInteger(3) // true
isInteger(3.3) // false
isInteger('') // false
isInteger('3') // false
isInteger(true) // false
isInteger([]) // false
```

这个直接把字符串，true，[]屏蔽了，代码量比上一个函数还少。

3. 通过 parseInt 判断

```
function isInteger(obj) {
 return parseInt(obj, 10) === obj
}
isInteger(3) // true
isInteger(3.3) // false
isInteger('') // false
isInteger('3') // false
isInteger(true) // false
isInteger([]) // false
```

很不错，但也有一个缺点

```
isInteger(1000000000000000000000) // false
```

竟然返回了 false，没天理啊。原因是 parseInt 在解析整数之前强迫将第一个参数解析成字符串。这种方法将数字转换成整型不是一个好的选择。

4. ES6 提供了 Number.isInteger

```
Number.isInteger(3) // true
Number.isInteger(3.1) // false
Number.isInteger('') // false
Number.isInteger('3') // false
Number.isInteger(true) // false
Number.isInteger([]) // false
```

### 二：判断回文

1. 数组 reverse 方法(该方法会改变原数组)

```
var str1 = "abcba";
function hui(str) {
    let arr = str.split("");
    arr.reverse;
    return str === arr.join("");
}
console.log(hui(str1));
```

2. 遍历方法

```
function hui(str) {
    let temp = "";
    for (let i = str.length - 1; i >= 0; i--) {
        temp += str[i];
    }
    return temp === str;
}
```

### 三:高阶函数

console.log(sum(2, 3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5

```
function sum(...args) {
    console.log(args);
    if (args.length === 2) {
        return args[0] + args[1];
    } else {
        return function(...args2) {
        return args[0] + args2[0];
        };
    }
}
```

```
function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}
```

### 四：输出结果

```
console.log(1 + "2" + "2"); //"122"
console.log(1 + +"2" + "2"); //"32"
console.log(1 + -"1" + "2"); //"02"
console.log(+"1" + "1" + "2"); //"112"
console.log("A" - "B" + "2"); //"NaN2"
console.log("A" - "B" + 2); //
```

### 五：递归导致堆栈溢出处理

1. 尾递归

```
//普通递归
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(5) // 120
//尾递归
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5, 1) // 120
```

2. setTimeout

```
function foo() {
    setTimeout(foo, 0);
}
foo()
```

然后执行 settimeout 函数这个时候虽然它又继续调用自己，但是这里可以理解多线程操作了，只是开启另一个线程来启动 foo，而当前线程仍然继续执行，当当前线程的 foo 执行完成后，自然就出栈了，每一次的 foo 执行都是这个过程，所以栈里不会容量超标的。

### 六: 判断输出

1.

```
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));

0 || 1 = 1
1 || 2 = 1
0 && 1 = 0
1 && 2 = 2
```
