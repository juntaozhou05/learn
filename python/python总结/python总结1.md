### 一：python:sorted

### 二：python:for in 循环

1. python 不支持类似 c 的 for(i=0;i<5;i++)这样的循环语句，但可以借助 range 函数模拟：

```
for x in range(0,5,1):
    print x
```

### 三：函数和方法

### 四：Python 中 is 和==的区别

1. Python 中对象包含的三个基本要素，分别是：id(身份标识)、type(数据类型)和 value(值)。

==是 python 标准操作符中的比较操作符，用来比较判断两个对象的 value(值)是否相等

is 也被叫做同一性运算符，这个运算符比较判断的是对象间的唯一身份标识，也就是 id 是否相同。

```
>>> x = y = [4,5,6]
>>> z = [4,5,6]
>>> x == y
True
>>> x == z
True
>>> x is y
True
>>> x is z
False
>>>
>>> print id(x)
3075326572
>>> print id(y)
3075326572
>>> print id(z)
3075328140
```

### 五：Python 中 for 循环搭配 else

1. 当迭代的对象迭代完并为空时，位于 else 的子句将执行，而如果在 for 循环中含有 break 时则直接终止循环，并不会执行 else 子句。

```
for i in range(10):
    if i == 5:
        print 'found it! i = %s' % i
        break
else:
    print 'not found it ...'
```
