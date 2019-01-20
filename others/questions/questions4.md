### 一：Js：模拟实现call函数
1. call改变了this的指向，指向到foo；调用了bar函数
```
Function.Prototype.call2 = function(context){
  //获取调用call2的函数，用this
  context.fn = this;
  context.fn();
  delete context.fn;

}
// 测试一下
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.call2(foo); // 1
```
2. call 函数还能给定参数执行函数。
```
// 第二版
Function.prototype.call2 = function(context) {
    context.fn = this;
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    eval('context.fn(' + args +')');
    delete context.fn;
}

// 测试一下
var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}

bar.call2(foo, 'Cherry', 18); 
// Cherry
// 18
// 1
```
3. 1.this 参数可以传 null，当为 null 的时候，视为指向 window
2.函数是可以有返回值的！
```
// 第三版
Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this;

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args +')');

    delete context.fn
    return result;
}

// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call(null); // 2

console.log(bar.call2(obj, 'Cherry', 18));
// 1
// Object {
//    value: 1,
//    name: 'Cherry',
//    age: 18
// }
```