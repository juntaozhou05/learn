### 一：单向数据流和双向数据流

1. 单向数据流过程：

简单的单向数据流（unidirectional data flow）是指用户访问 View，View 发出用户交互的 Action，在 Action 里对 state 进行相应更新。state 更新后会触发 View 更新页面的过程。这样数据总是清晰的单向进行流动，便于维护并且可以预测。

2. vuex 和 redux 解决什么问题：

(1)多个视图依赖于同一状态
(2)来自不同视图的行为需要变更同一状态

3. 特点：

（1） 所有状态的改变可记录、可跟踪，源头易追溯;
（2） 所有数据只有一份，组件数据只有唯一的入口和出口，使得程序更直观更容易理解，有利于应用的可维护性;
（3） 一旦数据变化，就去更新页面(data-页面)，但是没有(页面-data);
（4） 如果用户在页面上做了变动，那么就手动收集起来(双向是自动)，合并到原有的数据中

4. 双向数据流

双向数据绑定，带来双向数据流。数据（state）和视图（View）之间的双向绑定。

说到底就是 （value 的单向绑定 + onChange 事件侦听）的一个语法糖，你如果不想用 v-model，像 React 那样处理也是完全可以的。

### 二：string 字符串类型转换为 number 数字类型有 5 种方法

Number()，parseInt()，parseFloat()，new Number()，\*/

1. 第一个函数 Number()，即强制类型函数 Number()可以用于任何数据类型，而另外两个函数则专门用于把字符串转化成数值
2. parseInt()会取出字符串数字部分，返回新字符串，如果第一个字符串就是非数字，返回 NaN，如果是有小数的数字，会被除去。
3. parseFloat()会取出字符串数字部分，返回新字符串，如果第一个字符串就是非数字，返回 NaN，如果是有小数的数字，会被保留，但是只有第一个小数点儿后的数字保留。
4. new Number() 一般不推荐使用
5. 使用运算符\* /

### 三：js 属性对象的 hasOwnProperty 方法

1. Object 的 hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性

```
var o = new Object();
o.prop = 'exists';

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty('prop');  // true
changeO();
o.hasOwnProperty('prop');  // false
```

2. 遍历一个对象的所有自身属性

```
var buz = {
    fog: 'stack'
};

for (var name in buz) {
    if (buz.hasOwnProperty(name)) {
        alert("this is fog (" + name + ") for sure. Value: " + buz[name]);
    }
    else {
        alert(name); // toString or something else
    }
}
```

3. JavaScript 并没有保护 hasOwnProperty 属性名，因此，可能存在于一个包含此属性名的对象，有必要使用一个可扩展的 hasOwnProperty 方法来获取正确的结果：

```
var foo = {
    hasOwnProperty: function() {
        return false;
    },
    bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // 始终返回 false

// 如果担心这种情况，可以直接使用原型链上真正的 hasOwnProperty 方法
// 使用另一个对象的`hasOwnProperty` 并且call
({}).hasOwnProperty.call(foo, 'bar'); // true

// 也可以使用 Object 原型上的 hasOwnProperty 属性
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
```

### 四：JS 中 isPrototypeOf

1. isPrototypeOf 是用来判断指定对象 object1 是否存在于另一个对象 object2 的原型链中，是则返回 true，否则返回 false。格式如下：

object1.isPrototypeOf(object2);
object1 是一个对象的实例；
object2 是另一个将要检查其原型链的对象。
原型链可以用来在同一个对象类型的不同实例之间共享功能。
如果 object2 的原型链中包含 object1，那么 isPrototypeOf 方法返回 true。
如果 object2 不是一个对象或者 object1 没有出现在 object2 中的原型链中，isPrototypeOf 方法将返回 false。

```
class Obj {}
let obj = new Obj();
console.log(Obj.prototype.isPrototypeOf(obj));//true
Object.prototype.isPrototypeOf(Function.prototype);//true
```

### 五. 为什么 Object.prototype.isPrototypeOf(Function)是 true

1. js 中 Object 和 Function 的关系是微妙的，他们互为对方的一个“实例”。

Function instanceof Object 和 Object instanceof Function 都是 true

我们可以认为 Object 是一个特殊的“类”，而这里的“类”即：function

于是便可以理解为： Object = function () {} 或 Object = new Function(); 即： Object 是 Function 的一个实例，所以，Object 原型链中便包含 Function.prototype，得出： Function.prototype.isPrototypeOf(Object) 为 true

2. 同时，js 中，所有对象（不包括 js 语言外部对象）都可视为是 Object 的一个实例， Function 不例外，Function.prototype 亦不例外，于是有 Function = new Object(); Function.prototype = new Object(), 于是 Object.prototype.isPrototypeOf(Function) 和 Object.prototype.isPrototypeOf(Function.prototype) 都为 true 了

3. 补充：Function 本身也是一个“类”，然而，所有“类”都是 Funciton 的实例，于是 Function instanceof Function; 为 true。同时，所有对象都是 Object 类的实例，Object 本身也是一个对象，所有又有 Object instanceof Object 也为 true。另外，还可以认为 Funciton 类型是 Object 类型的一个“派生类”，class Function 继承了 class Object ，是 class Object 的一个“子类”。
