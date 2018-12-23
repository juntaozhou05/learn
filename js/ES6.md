### 一.使用箭头函数要避免的情况

**1. 使用箭头函数定义对象的方法**

```
// bad
let foo = {
  value: 1,
  getValue: () => console.log(this.value)
}

foo.getValue();  // undefined
```

**2.定义原型方法**

```
// bad
function Foo() {
  this.value = 1
}

Foo.prototype.getValue = () => console.log(this.value)

let foo = new Foo()
foo.getValue();  // undefined
```

**3.作为事件的回调函数**

```
// bad
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    console.log(this === window); // => true
    this.innerHTML = 'Clicked button';
});
```

### 二.for...of

**1.遍历范围**  
for…of 循环可以使用的范围包括：

1.数组  
2.Set  
3.Map  
4.类数组对象，如 arguments 对象、DOM NodeList 对象  
5.Generator 对象 6.字符串

**2.**

```
for (const v of ['a', 'b', 'c']) {
  console.log(v);
}
// a b c

for (const [i, v] of ['a', 'b', 'c'].entries()) {
  console.log(i, v);
}
// 0 "a"
// 1 "b"
// 2 "c"
```

**for...of 可以直接循环出 map 的 key value**

### 三.Promise

**1.promise.all**  
Promise.all 里的任务列表[asyncTask(1),asyncTask(2),asyncTask(3)],我们是按照顺序发起的。
但是根据结果来说，它们是异步的，互相之间并不阻塞，每个任务完成时机是不确定的，尽管如此，所有任务结束之
后，它们的结果仍然是按顺序地映射到 resultList 里,这样就能和 Promise.all 里的任务列表
[asyncTask(1),asyncTask(2),asyncTask(3)]一一对应起来  
**2.promise.race**  
语法和 all()一样，但是返回值有所不同，race 根据传入的多个 Promise 实例，只要有一个实例 resolve 或者 reject，就只返回该结果，其他实例不再执行。

### 四:冻结对象
