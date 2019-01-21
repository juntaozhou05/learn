### 一：Js：模拟实现 call 函数

1. call 改变了 this 的指向，指向到 foo；调用了 bar 函数

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

3. 1.this 参数可以传 null，当为 null 的时候，视为指向 window 2.函数是可以有返回值的！

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

### 二：实现 indexOf 方法

1. indexOf()方法是 ES5 中出现的数组方法，它有两个参数
   array.indexOf(value,start)
   第一个参数指定要在数组查找的值，第二个可选参数指定开始查找的数组下标。如果省略，则为 0。如果数组中存在匹配的值，就返回第一次匹配的数组下标，如果不存在匹配的值，则返回-1。
   示例：['a','b','c'].indexOf('a',1) //返回-1

```
var indexof = function(array,value,start){
   if(array == null) return -1;
   var i=0,length = array.length;
   if(start){
       if(typeof start == 'number'){
           // 添加对start为负值时的处理
           i = (start < 0 ? Math.max(0,length+start):start);
        }
   }
   // 如果浏览器支持ES5 indexOf，则直接使用它
   if(Array.prototype.indexOf && array.indexOf === Array.prototype.indexOf){
        return array.indexOf(value,start);
   }
   // 遍历数组
   for(;i<length;i++){
       if(array[i]===value){
           return i;
       }
   }
   return -1;
}
//测试
console.log(indexof([2,4,1,8,5],1,0));//输出2
```

### 三：设计模式（节流模式-----图片懒加载）

https://www.cnblogs.com/hsp-blog/p/5897393.html
