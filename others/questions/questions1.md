### 一：typeof
1. 返回：string number boolean undefined object function symbol
2. typeof 为什么要区分object和function：从技术角度讲，函数在ECMAScript中是对象，不是一种数据类型。然而，函数也确实有一些特殊的属性，因此通过typeof操作符来区分函数和其他对象是有必要的。

### 二：js预解析

1. 定义
预解析：在当前作用域下,js运行之前，会把带有var和function关键字的事先声明，并在内存中安排好。然后再从上到下执行js语句。

预解析只会发生在通过var定义的变量和function上。

2. var
通过var关键字定义的变量进行预解析的时候：都是声明declare，不管它有没有赋值，都会赋值undefined。
只要是通过var定义的，不管是变量，还是函数，都是先赋值undefined，如果是变量，也不管变量有没有赋值，在预解析阶段，都是会被赋值为undefined。

3. function进行预解析的时候，不仅是声明而且还定义（define）了，但是它存储的数据的那个空间里面存储的是代码是字符串，没有任何意义。

定义一个函数想要立即执行，写成如下形式是不可行的，在预解释的时候，它把它分解成两部分来对待，第一部分是fn函数，而第二部分是(),一个匿名函数，执行时会报错。如果小括号带参数，如(2)，虽然不会报错，会打印出来2，但并不能把fn执行，也不能当成参数传递给fn函数。
```
function fn(){
//代码区
}()
```
如果你想实现立即执行的函数，可以把要执行的函数放到一对括号里面，对于JavaScript 来说，括弧()里面不能包含语句，所以在这一点上，解析器在解析function关键字的时候，会将相应的代码解析成function表达式，而不是function声明所以，只要将大括号将代码(包括函数部分和在后面加上一对大括号)全部括起来就可以了。 如下：
```
(function fn(){
//代码区...
}())
还可以写成：闭包。

(function(){
//代码区...
})();
```

4. 预解析需要注意的情况
预解析是发生在当前作用域下的，刚开始的时候，我们预解析的是全局作用域，在js中我们的global就是我们的window。
我们运行函数的时候会生成一个新的私有作用域（每次执行都是新的，执行完成就销毁）这个作用域下我们可以理解为开辟了一个新的内存空间。在这个内存中我们也要执行预解析。当我们的函数执行完成后，这个内存或者作用域就会销毁
如果在当前作用域下的一个变量没有预解析，就会向它的上一级去找，直到找到window，如果window下也没有定义，就会报错。所以，在函数内通过var定义的变量是局部变量，没有能过var 定义的变量是全局变量。
预解析不会在同一个变量上重复的发生，也就是一个变量如果已经在当前作用域下预解析了，不会再重复解析。
等号右边的function不会进行预解析。
```
alert(a);
fn();
var a = function fn(){};
```
第一次打印undefined，第二次报错，未定义，因为预解析的时候，=号右边是不进行预解析的。

预解释是不受其它if或者其它判断条件影响的，也就是说，即使条件不成立，我们里面只要有var或者function也会被预解释。if,while

```
alert(a); //undefined
if(1==2){
　　var a=12;
}
```
后面定义的会覆盖前面定义的
```
alert(a); //弹出后面的function
function a(){
var b;
}
alert(a); //仍然弹出后面的function，因为function是提前预解析的
function a(){
var c;
}
```
JavaScript“预解析”是分段进行的，准确说是分script块进行的。

5. 测试题
```
//题目一：

if(!("a" in window)){
    var a = "李玉华"；
}
alert(a);

//题目二：

function fn(){
    alert("我们是全局的fn");
}
function fn2(){
    alert(fn);
    fn = 3;
    return ;
    function fn(){
        alert("我是fn2里面的");
    }
}
fn2(); //function fn(){alert("我是fn2里面的");}
我们的预解释也不会受到function里面的return影响

//题目三:

var n = 0;
function a(){
    var n = 10;
    function b(){
        n++;
        alert(n);
    }
    b();
    return b;
}
var c = a(); //a()执行一次，弹出11，并且把返回值赋给c，此时的c为function b(){}
c(); //alert(n),12
alert(n); // 0

题目四：

return直接返回的那个，其实是一个结果或者是值，是不需要预解释的。

var n = 99;
function outer(){
    var n = 0;
    return function inner(){
        return n++;
    }
}
var c = outer(); //c=function inner(){ return n++; }
var num1 = c(); //0，然后再执行n++ 此时n=1;
var num2 = c(); //1, n++ 2;
var d = outer(); //重新开辟新
var num3 = d(); //0
当我们的一个函数返回一个新的function，我们在外面定义一个变量来接收，这样这个函数的内存就不能在执行完成后自动销毁，也就是我们所谓的函数内存被占用了。

变量的值要看它在哪定义，this，要看它在哪调用的。
```

https://www.cnblogs.com/zhiyong666/p/5865126.html