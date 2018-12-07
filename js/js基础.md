##js 基础 ####一.javascript 语言 typeof 返回的结果
string number boolean object undefined function

### 二.js 作用域

**1.作用域**  
作用域是指程序源代码中定义变量的区域。
作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。
JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。  
**2.静态作用域与动态作用域**  
因为 JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。 函数的作用域基于函数创建的位置。  
而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。

### 三.作用域和上下文

**1.函数上下文**  
在函数上下文中，我们用活动对象(activation object, AO)来表示变量对象。

活动对象和变量对象其实是一个东西，只是变量对象是规范上的或者说是引擎实现上的，不可在 JavaScript 环境中访问，只有到当进入一个执行上下文中，这个执行上下文的变量对象才会被激活，所以才叫 activation object 呐，而只有被激活的变量对象，也就是活动对象上的各种属性才能被访问。

**2.函数执行过程**  
**进入执行上下文**  
当进入执行上下文时，这时候还没有执行代码，

变量对象会包括：

函数的所有形参 (如果是函数上下文)

由名称和对应值组成的一个变量对象的属性被创建
没有实参，属性值设为 undefined
函数声明

由名称和对应值（函数对象(function-object)）组成一个变量对象的属性被创建
如果变量对象已经存在相同名称的属性，则完全替换这个属性
变量声明

由名称和对应值（undefined）组成一个变量对象的属性被创建；
如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性

举个例子：

```
function foo(a) {
  var b = 2;
  function c() {}
  var d = function() {};

  b = 3;

}

foo(1);
```

在进入执行上下文后，这时候的 AO 是：

```
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: reference to function c(){},
    d: undefined
}
```

**代码执行**  
在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值

```
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: reference to function c(){},
    d: reference to FunctionExpression "d"
}
```

**总结**

1. 全局上下文的变量对象初始化是全局对象
2. 函数上下文的变量对象初始化只包括 Arguments 对象
3. 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值
4. 在代码执行阶段，会再次修改变量对象的属性值

**思考题**

```
function foo() {
    console.log(a);
    a = 1;
}

foo(); // ???

function bar() {
    a = 1;
    console.log(a);
}
bar(); // ???
```

第一段会报错：Uncaught ReferenceError: a is not defined。

第二段会打印：1。

这是因为函数中的 "a" 并没有通过 var 关键字声明，所有不会被存放在 AO 中。
