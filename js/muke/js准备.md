### 一：js部分

1. setTimeout准时吗？

不一定准时，只是时间放到了事件队列里

定时器对队列的工作方式是：当我们设置的时间过去后，将代码插入到执行队列注意，给队列添加代码并不意味着对它立即执行，而只能表示它会尽快执行。设定150ms后执行的定时器不代表到了150ms代码就立刻执行。它表示代码会在150ms后被加入到队列中。如果在这个时间点上队列中没有其他东西，那么这段代码就会被执行，表面看上去好像代码就在精确指定的时间点上执行了。其他情况下，代码可能明显地等待更长时间才执行。

队列中所有的代码都要等到Javascript进程空闲之后才能执行，而不管它们是如何添加到队列中的。

如果想要时间准时可以使用web worker可以解决这个这个问题，但是因为web worker是html5里的标准，低版本的浏览器是支持不了的。这里我们简单的介绍下web worker的使用
```
// 创建一个worker实例
var worker = new Worker("worker.js");

// 向worker.js发送信息
worker.postMessage( 'hello world' );

var last = 0;
// 接收从worker.js发送的信息，存储在event.data中
worker.onmessage = function(event){
    var diff = event.data-last;
    last = event.data;
    $('#content').append( diff+'<br/>' );
}

// 报错信息
worker.onerror=function(error){
    console.log(error.filename,error.lineno,error.message);
}
```
worker.js

```
// 接收前端页面发送过来的信息，存储在event.data中
onmessage = function(event){
    var data = event.data;
    setInterval(function(){
        // 向前端页面发送信息
        postMessage( Date.now() );
    }, 500)
}
```

2. setTnterval

使用setInterval()创建的定时器确保了定时器代码规则地插入队列中。这个方式的问题在于，定时器代码可能在代码再次被添加到队列之前还没有执行完毕，结果导致定时器代码连续运行好几次，而之间没有任何停顿。幸好，Javascript引擎规避了这个问题，当使用setInterval()时，仅当没有该定时器的任何其他代码实例时，才将定时器代码添加到队列中。这确保了定时器代码加入到队列中的最小时间间隔为指定间隔。

不过即使是这样的规则，也会出现两个问题：1）某些间隔会被跳过；2）多个定时器的代码执行之间的间隔可能回避预期的小。

比如定时器里添加的代码运行的时间很长，导致有些间隔不能被添加到执行队列里，不能执行。

3. js预编译过程

- js首先扫描var关键字，提前到顶端；
- 然后扫描function定义，提到var之前
- 然后再顺序执行

1:所有的声明都会提升到作用域的最顶上去。
2:同一个变量只会声明一次，其他的会被忽略掉。
3:函数声明的优先级高于变量申明的优先级，并且函数声明和函数定义的部分一起被提升。
