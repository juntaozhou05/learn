1. setTimeout 第三个参数

```
for(var i=0;i<6;i++){
    setTimeout(function(j){
        console.log(j);
    },i*1000,i);
}
```

由于每次传入的参数是从 for 循环里面取到的值，所以会依次输出 0~5。

看了上面的代码，相信你对这个 setTimeout 的第三个参数作用大概了解了，是的，它就是给 setTimeout 第一个函数的参数。

```
function sum(x,y,z){
    console.log(x+y+z);
}
setTimeout(sum,1000,1,2,3);
```

上面第二行打印出了 6，1+2+3=6（11 是 setTimeout timeId）。

可以看出，第三个及以后的参数都可以作为 sum 函数的参数。

**第三个参数作为函数**

```
var i=0;
setTimeout(function(){
    console.log('第二次'+i)
},3000,setTimeout(function(){
    console.log('第一次'+i);
    i++;
},1000));
```

最后依次输出为 第一次 0 第二次 1

可以看到第三个参数还可以是先执行，然后再执行函数。
