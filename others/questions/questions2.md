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
### 四:Js new一个函数和直接调用函数的区别
1. 例一：
```
function Person(name,age){  
  
this.name=name;  
this.age=age;  
this.sayName=function(){  
alert(this.name);  
      };  
}  
  
//var person=new Person("张三",20); //此处为 构造对象，构造对象的话，返回的新对象是由解析器自己生成的。  
var person=Person("张三",20); //假设我在Person函数里面加了return "你好"; 这时的person就不会报undefined，而是一个字符串你好  
person.sayName();//报错 person undefined 此处为普通函数调用，又没有给定返回值，出错。  
  
//因为此时this指向window对象，  
window.sayName();//此时不会报错  
  
接下来就问，为什么我赋值给person，可以用window来引用呢？  
因为如果不用new就相当于普通函数调用，而 Person()根本没有返回值，  
所以Person根本就没赋值给person，此时的person只是一个undefined，  
但是Person却执行了一次，成为了window的对象，this指向了window，所以window可以直接使用Person的方法，  
  
Person("张三",20);  
person.sayName();  
```
2. 例二：如果函数返回值为常规意义上的数值类型（Number、String、Boolean）时，new函数将会返回一个该函数的实例对象，
而如果函数返回一个引用类型（Object、Array、Function）时，则new函数与直接调用函数产生的结果相同。
如下：
```
function Test()  
  {  
      this.name = "test";  
      return "test";  
  }  
  var test1 = new Test();   //Object 对象，它有一个name 属性，并且返回一个字符串test  
  var test2 = Test();    // 函数Test()属于Function对象   这个test2，它单纯是一个字符串  
```
3. 过程：
构造函数不需要显示的返回值。使用new来创建对象(调用构造函数)时，如果return的是非对象(数字、字符串、布尔类型等)会忽而略返回值;如果return的是对象，则返回该对象。
下面简单介绍下，javascript中new对象的过程：如var myObj = newPerson(“aty”,25);
1.创建一个空的Object对象.var obj = new Object();
2.将构造函数Person中this指向刚创建的obj对象
3.将创建的obj的__proto__指向构造函数Person的prototype。这一步是建立对象和原型直接的对应关系。firefox下通过
对象的__proto__属性能够访问到原型，IE下则没有暴露出相应的属性。
4.执行构造函数Person()中的代码