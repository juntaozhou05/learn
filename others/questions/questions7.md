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
