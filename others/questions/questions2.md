### 一：节点获取

1. 通过父节点获取子节点：
parentObj.firstChild　　     获取已知父节点的第一个子节点 
parentObj.lastChild　　      获取已知父节点的最后一个子节点
parentObj.childNodes         获取已知父节点的子节点数组(这里我在IE 7中获取的是所有直接的子节点)
parentObj.children           获取已知节点的直接子节点数组（在IE7中和childNodes效果一样）
parentObj.getElementsByTagName(tagName)     返回已知子节点中类型为指定值的子节点数组
neighbourNode.previousSibing  获取已知节点的前一个兄弟节点
neighbourNode.nextSibing      获取已知节点的下一个兄弟节点
2. dom节点向后添加节点--insertAfter()方法兼容写法
```

function insertAfter(insert_element,target_element) {
        var parent = insert_element.parentNode;
        //最后一个子节点 lastElementChild兼容其他浏览器 lastChild  兼容ie678;
        var last_element = parent.lastElementChild || parent.lastChild;
        //兄弟节点同样也是有兼容性
        var target_sibling = target_element.nextElementSibling || target_element.nextSibling;
        if (last_element == target_element)
        {//先判断目标节点是不是父级的最后一个节点，如果是的话，直接给父级加子节点就好
            parent.appendChild(insert_element);
        }
        else
        {//不是最好后一个节点  那么插入到目标元素的下一个兄弟节点之前（就相当于目标元素的insertafter）
            parent.insertBefore(insert_element,target_sibling);
        }
    }
```
### 二：string 为什么有length属性
1. String类型的字符串 "abcd"，在调用length的时候, JS引擎会先对原始类型数据进行包装    new String("abcd")，然后对其方法进行调用   new String("abcd").length

### 三：轻松理解JS基本包装对象
1. 在基本类型中，有三个比较特殊的存在就是：String Number Boolean，这三个基本类型都有自己对应的包装对象。并且随时等候召唤。
```
//我们平常写程序的过程：
var str = 'hello'; //string 基本类型
var s2 = str.charAt(0); //在执行到这一句的时候 后台会自动完成以下动作 ：
（ 
 var str = new String('hello'); // 1 找到对应的包装对象类型，然后通过包装对象创建出一个和基本类型值相同的对象
 var s2 = str.chaAt(0); // 2 然后这个对象就可以调用包装对象下的方法，并且返回结给s2.
 str = null;  //    3 之后这个临时创建的对象就被销毁了， str =null; 
 ） 
alert(s2);//h 
alert(str);//hello     注意这是一瞬间的动作 实际上我们没有改变字符串本身的值。就是做了下面的动作.这也是为什么每个字符串具有的方法并没有改变字符串本身的原因。
```
由此我们可以知道，引用类型和基本包装对象的区别在于：生存期

引用类型所创建的对象，在执行的期间一直在内存中，而基本包装对象只是存在了一瞬间。

所以我们无法直接给基本类型添加方法：
```
var str = 'hello';
str.number = 10; //假设我们想给字符串添加一个属性number ，后台会有如下步骤
｛ 
 var str = new String('hello'); // 1 找到对应的包装对象类型，然后通过包装对象创建出一个和基本类型值相同的对象
  str.number = 10; // 2 通过这个对象调用包装对象下的方法 但结果并没有被任何东西保存
 str =null; // 3 这个对象又被销毁
 ｝
alert(str.number); //undefined  当执行到这一句的时候，因为基本类型本来没有属性，后台又会重新重复上面的步骤
｛ 
 var str = new String('hello'); // 1 找到基本包装对象，然后又新开辟一个内存，创建一个值为hello对象
 str.number = undefined   // 2 因为包装对象下面没有number这个属性，所以又会重新添加，因为没有值，所以值是未定 ;然后弹出结果
 str =null; // 3 这个对象又被销毁
 ｝
```
那么我们怎么才能给基本类型添加方法或者属性呢？

答案是在基本包装对象的原型下面添加，每个对象都有原型。
```
//给字符串添加方法  要写到对应的包装对象的原型下才行
var str = 'hello';
String.prototype.last= fuction(){ 
    return this.charAt(this.length);
}; 
str.last(); // 5 执行到这一句，后台依然会偷偷的干这些事
｛ 
    var str = new String('hello');// 找到基本包装对象，new一个和字符串值相同的对象，
    str.last();  // 通过这个对象找到了包装对象下的方法并调用 
    str =null; //  这个对象被销毁
｝
```
看注释相信能看出创建在基本包装对象原型下面的方法和属性才能被保存。
2. 包装对象和显式创建对象的区别：
二者是内容相等，但是存储空间地址不一样
```
var a1 = "test",
a2=new String("test");
console.log(a1 == a2);//true
console.log(a1 === a2);//false
```