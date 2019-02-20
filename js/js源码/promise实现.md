### 一：简易三行代码实现 promise

```
function easyPromise (fn) {
    this.then = cb => this.cb = cb
    this.resolve = data => this.cb(data)
    fn(this.resolve)
}

```

上面的代码就实现了一个简单的,实现 then 回调的「promise」,这里为了缩短代码量,用了 es6 的简写,实际展开应该是这样

```
function easyPromise (fn) {
    var that = this

    // 第一步,定义 then()
    this.then = function (cb) {
        //先将 then() 括号里面的参数(回调函数)保存起来
        that.cb = cb
    }

    // 定义一个 resolve
    this.resolve = function(data) {
        that.cb(data)
    }

    // 将 resolve 作为回调函数,传给fn
    fn(this.resolve)
}
```

### 二：十行实现 promise

```
var MyPromise = function(doSomething) {
  this.doSomething = doSomething;
};
MyPromise.prototype.then = function(resovle, reject) {
  this.doSomething(resovle, reject);
  return this;
};
```

### 三：具体实现

1. 问题：

```
function MyPromise(xxx) {
    xxx;
return xxx;
}

var promise = new MyPromise(function(x, y) {
    setTimeout(() => {
        x(11);
    }, 3000);
});
```

2. 解决思路

从上面使用自己实现的 Promise 时，可以看到传入的参数是一个函数，那么确定 Promise 的参数类型是 Function，同时它返回的内容里还有一个 then 方法，它也接受一个函数作为参数，根据对 Promise 的了解，它应接受两个函数：

```
function MyPromise(fn) {
    ...
    return {
        then:function(successFn,errorFn) {
            return undefined ////如果不写默认return undefined，这里我们只做一次then，如果要用then链，可能需要递归调用
        }
    }
}
```

同时我们需要去执行传进来的这个函数，它实际上有两个函数作为参数，则必然：

```
function MyPromise(fn) {
    fn.call(undefined, successNotify, errorNotify); //fn接受2个参数

    return {
        then: function(successFn, errorFn) {
            return undefined;
        }
    };
}
```

fn 接受的两个函数需要单独定义：

```
function Promise(fn) {
  function successNotify() {}

  function errorNotify() {}

  fn.call(undefined, successNotify, errorNotify); // fn接受两个函数作为参数

  return {
    then: function(successFn, errorFn) {
      return undefined;
    }
  }
}
```

为了让 fn 的处理函数能够正确反映 Promise 的状态，需要添加一个状态变量：

```
function Promise(fn) {
  let status = 'pending';

  function successNotify() {
    status = 'resolved';
  }

  function errorNotify() {
    status = 'rejected';
  }

  fn.call(undefined, successNotify, errorNotify); // fn接受两个函数作为参数

  return {
    then: function(successFn, errorFn) {
      return undefined;
    }
  }
}
```

接下来我们要处理 then 传进来的函数，如果成功你那个解决了，就要处理 then 传进来的成功函数，否则要处理失败函数，因此用两个单独的队列放传进来的函数：

```
function Promise(fn) {

  let status = 'pending';

  let successArray = [];
  let errorArray = [];

  function successNotify() {
    status = 'resolved';
  }

  function errorNotify() {
    status = 'rejected';
  }

  fn.call(undefined, successNotify, errorNotify); //fn接受两个函数作为参数

  return {
    then: function(successFn, errorFn) {
      successArray.push(successFn);
      errorArray.push(errorFn);
      return undefined; // 如果不写默认return undefined，这里我们只做一次then，如果要用then链，可能需要递归调用
    }
  }
}
```

只有在处理好之后才会处理 then 里面传递的内容，新增一个对 then 的处理函数：

```
function Promise(fn) {
  let status = 'pending';

  let successArray = [];
  let errorArray = [];

  function successNotify() {
    status = 'resolved';
    handleThen.apply(undefined, arguments);
  }

  function errorNotify() {
    status = 'rejected';
    handleThen.apply(undefined, arguments);
  }

  function handleThen() {
    if (status === 'resolved') {
      for (let i = 0; i < successArray.length; i++) {
        successArray[i].apply(undefined, arguments);
      }
    } else if (status === 'rejected') {
      for (let i = 0; i < errorArray.length; i++) {
        errorArray[i].apply(undefined, arguments);
      }
    }
  }

  fn.call(undefined, successNotify, errorNotify); //fn接受两个函数作为参数

  return {
    then: function(successFn, errorFn) {
      successArray.push(successFn);
      errorArray.push(errorFn);
      return undefined; // 如果不写默认return undefined，这里我们简化，只做一次then，如果要用then链，可能需要递归调用
    }
  }
}
```

为了确保回调是异步执行的，用 setTimeout 裹一层：

```
function Promise(fn) {
  let status = 'pending';

  let successArray = [];
  let errorArray = [];

  function successNotify() {
    status = 'resolved';
    handleThen.apply(undefined, arguments);
  }

  function errorNotify() {
    status = 'rejected';
    handleThen.apply(undefined, arguments);
  }

  function handleThen() {
    setTimeout(() => {
      if (status === 'resolved') {
        for (let i = 0; i < successArray.length; i++) {
          successArray[i].apply(undefined, arguments);
        }
      } else if (status === 'rejected') {
        for (let i = 0; i < errorArray.length; i++) {
          errorArray[i].apply(undefined, arguments);
        }
      }
    });
  }

  fn.call(undefined, successNotify, errorNotify); //fn接受两个函数作为参数

  return {
    then: function(successFn, errorFn) {
      successArray.push(successFn);
      errorArray.push(errorFn);
      return undefined; // 如果不写默认return undefined，这里我们简化，只做一次then，如果要用then链，可能需要递归调用
    }
  }
}
```
