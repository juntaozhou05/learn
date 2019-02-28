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

在 JavaScript 中，和&&都是逻辑运算符，当从左到右计算时，返回第一个完全确定的“逻辑值”。

或（）运算符。在 x y 形式的表达式中，x 首先被计算并解释为布尔值。如果此布尔值为 true，则返回 true（1），并且不计算 y，因为已经满足“or”条件。但是，如果这个布尔值是“假”，在计算 y 并将其解释为布尔值之前，我们仍然不知道 x y 是真还是假。

因此，0_1 的计算结果为真（1），1_2 的计算结果为真。

和（&&）运算符。在 x&&y 形式的表达式中，x 首先被计算并解释为布尔值。如果此布尔值为 false，则返回 false（0），并且不计算 y，因为“and”条件已失败。但是，如果这个布尔值是“真”，在计算 y 并将其解释为布尔值之前，我们仍然不知道 x&&y 是真还是假。

然而，&&operator 的有趣之处在于，当表达式被计算为“true”时，则返回表达式本身。这很好，因为它在逻辑表达式中被算作“真的”，但在您想返回该值时也可以使用它。这就解释了为什么 1 和 2 返回 2（而您可能期望它返回 true 或 1），这有些令人惊讶。

### 七：css-loader 和 style-loader 的区别

1. css-loader: 加载.css 文件
2. style-loader:使用`<style>`将 css-loader 内部样式注入到我们的 HTML 页面

### 八：

```
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
```

原因如下：设置对象属性时，javascript 将隐式地将参数值字符串化。在这种情况下，因为 B 和 C 都是对象，所以它们都将被转换为`“[对象对象]”`。因此，a[b]和 a[c]都相当于一个`[“[对象对象]”]`，可以互换使用。因此，设置或引用 A[C]与设置或引用 A[B]完全相同。

### 九：

```
var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
```

首先，当 fn 作为参数传递给函数方法时，函数 fn 的作用域（this）是 window。var length=10；在窗口级别声明。它也可以作为 window.length 或 length 或 this.length（当 this==window 时）访问。

方法绑定到对象 obj，并使用参数 fn 和 1 调用 obj.method。尽管方法只接受一个参数，但在调用时它传递了两个参数；第一个参数是函数回调，另一个参数只是一个数字。

当在方法内部调用 fn（）时（该方法在全局级别作为参数传递函数），this.length 将可以访问 var length=10（全局声明），而不是对象 obj 中定义的 length=5。

现在，我们知道可以使用 arguments[]数组访问 javascript 函数中的任意数量的参数。

因此，参数[0]（）只是调用 fn（）。在 fn now 中，此函数的作用域成为 arguments 数组，记录 arguments[]的长度将返回 2。

因此，输出将如上所述。

### 十：数组中的 forEach 和 map 的区别

1. 相同点

- 都是循环遍历数组中的每一项
- forEach 和 map 方法里每次执行匿名函数都支持 3 个参数，参数分别是 item（当前每一项），index（索引值），arr（原数组）
- 匿名函数中的 this 都是指向 window
- 只能遍历数组
- 都不会改变原数组

2. 区别

- 1.map 方法返回一个新的数组，数组中的元素为原始数组调用函数处理后的值。 2.map 方法不会对空数组进行检测，map 方法不会改变原始数组。 3.浏览器支持：chrome、Safari1.5+、opera 都支持，IE9+,
- 1.forEach 方法用来调用数组的每个元素，将元素传给回调函数 2.forEach 对于空数组是不会调用回调函数的。

### 十一:

1.
