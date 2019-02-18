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

```
