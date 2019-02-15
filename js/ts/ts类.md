### 一：类的注意点

1. 类和模块内部默认采用严格模式，不需要使用 use strict 指定运行模式。
2. constructor 方法是类的默认方法，通过 new 命令生成对象实例时，自动调用该方法。一个类必须有 constructor 方法，如果没有显式定义，一个空的 constructor 方法会被默认添加，这一点与 Java 的类一致。
3. 必须使用 new 命令来调用 class ，否则将会报错。
4. 类不存在变量提升，只有先声明类，才能使用类。
5. 类的方法内部如果含有 this ，它默认指向类的实例。但是如果我们单独将其方法提取出来， this 值可能会指向当前运行的环境。为了防止这种事情的发生，我们可以使用箭头函数（箭头函数的 this 值指向初始化的函数）。

### 二：类修饰符

1. public

在 TS 里，成员都默认为 public。被 public 修饰的属性，我们在类的内外都可以自由访问到这些被定义的属性。

2. private

当成员被标记成 private 时，它就不能在声明它的类的外部访问。

3. protected

protected 修饰符与 private 修饰符的行为很相似，但有一点不同，protected 成员在派生类中仍然可以访问。
使用 private 修饰的父类成员，派生类无法访问。
使用 protected 修饰的父类成员，在派生类中仍然可以访问

4. readonly 修饰符

readonly 关键字与 public 、 private 和 protected 不一样，它修饰的不是成员的访问权限，而是成员的再赋值权限。
使用 readonly 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

### 三：抽象类

1. 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。
   abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

```

abstract class Animal {
    abstract makeSound(): void;// 必须在派生类中实现
    move(): void {
        console.log('roaming the earch...');
    }

```

注意：
① 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
② 抽象方法必须包含 abstract 关键字并且可以包含访问修饰符。

### 四： 接口

1.  在传统的面向对象概念中，一个类可以扩展另一个类，也可以实现一个或多个接口。一个接口可以实现一个或多个接口但是不能扩展另一个类或接口。wiki 百科中对 OOP 中接口的定义是

但是对于 TS 来说，接口更重要的意义是对值所具有的 结构 进行类型检查。
接口根据属性划分，可以划分成三类，一种是必选属性，另一种是可选属性，还有一种就是只读属性。

2. 必选属性就是函数必须要有的属性。

```

interface PersonVaule{
    name:string;
    age:number;
}
function Person(person:PersonVaule){
    this.name=person.name;
    this.age=person.age;
}
//创建实例
var xiaoming=new Person({name:"xiaoming",age:18})
```

类型检查器并不会检查属性的顺序，但是必须要必选属性。

```

var xiaoming2=new Person({age:18,name:"xiaoming"})//没有问题

var xiaoming3=new Person({name:"xiaoming"})//提示属性缺失:Property 'age' is missing in type '{ name: string; }'.
```

3. 可选属性

接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。

带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。

```
interface AnimalVaule{
    name?:string;
    eat:string;
    lifestyle?:string;
}
function Animal(animal:AnimalVaule){
    this.name=animal.name;
    this.eat=animal.eat;
    this.lifestyle=animal.lifestyle;
}
let cat=new Animal({eat:"食肉动物",lifestyle:"昼伏夜出"});
```

可选属性好处有二：

       1. 可以对可能存在的属性进行预定义
       2. 可以捕获引用了不存在的属性时的错误。

4. 只读属性

一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly 来指定只读属性:

```

interface Point {
    readonly x: number;
    readonly y: number;
}
```

5. readonly 和 const
   readonly 和 const 声明的变量或属性都不允许二次修改。这两个属性的使用区别在于是作为变量还是属性：
   做为变量使用的话用 const，
   做为属性则使用 readonly。

接口不仅仅能描述对象的属性，还能描述函数类型，可索引类型和类类型。

6. 函数类型

为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

```

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch:SearchFunc=function(src,sub){
    let result = src.search(sub);
    return result > -1;

```

注意：
函数的参数会逐个进行检查，要求对应接口的位置上的参数类型是兼容的，无需名称一致。

7. 可索引类型

与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如 a`[10]`或 ageMap`["daniel"]`。可索引类型具有一个 索引签名 ，它描述了对象索引的类型，还有相应的索引返回值类型。

索引签名共有两种形式：字符串和数字。

数字索引签名：

```
interface NN {[index: number]: number;}
let nn: NN = [1, 2];

interface NS {[index: number]: string;}
let ns: NS = ["1", "2"];
```

上面例子里，我们定义了 NN 接口和 NS 接口，它们具有索引签名。 这个索引签名表示了当用 number 去索引 NN 或 NS 接口 时会得到 number 类型或 string 的返回值。

字符串索引签名：

字符串索引签名能够很好的描述 dictionary 模式，并且它们也会确保所有属性与其返回值类型相匹配。

```
interface SS {[index:string]:string}
let ss: SS = {"A":"a", "B":"b"};

interface SN {[index: string]: number;}
let sn: SN = {"A":1, "B":2};
```

你可以将索引签名设置为只读，这样就防止了给索引赋值：

```

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!
```

索引的返回值可以不只一个，但是必须是同一个类型。

```
interface NN {
    [index: number]: number;
    length:number;
    name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
let nn: NN = [1, 2];
```

注意： 如果有多个返回值，那么数字索引的返回值必须是字符串索引返回值类型的子类型。
对于上述的解释，TS 原话是这样的：

8. 类类型

与 C#或 Java 里接口的基本作用一样，TS 也能够用它来明确的强制一个类去符合某种契约。

```

interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```
