##js 基础 ####一.javascript 语言 typeof 返回的结果
string number boolean object undefined function

### 二.js 作用域

**1.作用域**  
作用域是指程序源代码中定义变量的区域。
作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。
JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。  
**2.静态作用域与动态作用域**  
因为 JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。 函数的作用域基于函数创建的位置。  
而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。
