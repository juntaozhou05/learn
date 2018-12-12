### 一.BFC:

**含义:**
Block Formatting Contexts（BFC）  
块级元素格式化上下文  
它决定了块级元素如何对它的内容进行布局，以及与其他元素的关系和相互关系  
块级元素：父级（是一个块元素）  
内容：子元素（是一个块元素）  
其他元素：与内容同级别的兄弟元素  
相互作用：BFC 里的元素与外面的元素不发生影响

**触发条件:**
1.float 的值不为 none  
2.overflow 的值不为 visible  
3.display 的值为 table-cell、tabble-caption 和 inline-block 之一  
4.position 的值不为 static 或则 releative 中的任何一个

**FBC 布局与普通文档流布局区别** 1.浮动的元素是不会被父级计算高度  
2.非浮动元素会覆盖浮动元素的位置  
3.margin 会传递给父级  
4.两个相邻元素上下 margin 会重叠

**BFC 布局规则** 1.浮动的元素会被父级计算高度（父级触发了 BFC）  
2.非浮动元素不会覆盖浮动元素位置（非浮动元素触发了 BFC）  
3.margin 不会传递给父级（父级触发了 BFC）  
4.两个相邻元素上下 margin 会重叠（给其中一个元素增加一个父级，然后让他的父级触发 BFC）

### 二.:before 和 :after 两伪元素，平时都是使用双冒号还是单冒号？有什么区别？以及它们的作用：

1.单冒号(:)用于 CSS3 伪类，双冒号(::)用于 CSS3 伪元素。（伪元素由双冒号和伪元素名称组成） ; 2.双冒号是在当前规范中引入的，用于区分伪类和伪元素。不过浏览器需要同时支持旧的已经存在的伪元素写法，比如:first-line、:first-letter、:before、:after 等，
而新的在 CSS3 中引入的伪元素则不允许再支持旧的单冒号的写法; 3.想让插入的内容出现在其它内容前，使用::before，之后则使用::after； 在代码顺序上，::after 生成的内容也比::before 生成的内容靠后。
如果按堆栈视角，::after 生成的内容会在::before 生成的内容之上;

### 三.CSS 选择器是从右往左解析

1. 只要有公用样式，那么选择器最右边的那个类型选择器一定是相同的，如此公共样式就很自然的都集中到一个分支上，这个时候我们完全可以将其他不匹配的路径全部去掉而不用担心会漏掉某些个公用样式了。
2. 从右往左的匹配规则就是为了避免对所有元素进行遍历

### 四.css 优先级不能通过数量叠加超过比自己强大的优先级

### 五.关于 display：none；的图片加载

1. 如果元素有{display: none;}的样式的话，标签上的图片会被请求加载，但是不会被渲染

2. 如果父元素有{display: none;}的样式的话，子元素在样式表中的背景图片既不会渲染也不会加载，但是标签上的图片会被加载不会被渲染

```
<style>
.img-container {
background-image: url(../imgs/icon1.png);
}
</style>

<div style="display:none">
<div class="img-container"></div>
<img src="../imgs/icon2.png">
</div>
```

3. 伪类背景图片只在触发伪类时候才会请求加载（因此建议请求雪碧图---即一堆小图汇总到一张大图上，这样不会有 UI 跳跃感）

4. 已经请求过的相同图片不会重复请求

5. 不存在的元素，即时样式表里有写，也不会请求加载

### 六.如何产生不占空间的边框

1. box-shadow
2. outline

### 七.css 导入方式

link 页面被加载的时，link 会同时被加载，而@import 引用的 CSS 会等到页面被加载完再加载,且 link 是 XHTML 标签，无兼容问题; link 支持动态 js 去控制 DOM 节点去改变样式，而@import 不支持，

### 八.垂直水平居中

1.

```
margin: auto;
position:absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
```

2.

```
margin: auto;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
-webkit-transform: translate(-50%, -50%);
```

3.

```
//父元素
display: flex;
align-items: center; /*垂直居中*/
justify-content: center; /*水平居中*/

```

### 九.伪元素

1. 想让插入的内容出现在其它内容前，使用::before，之后则使用::after； 在代码顺序上，::after 生成的内容也比::before 生成的内容靠后。
   如果按堆栈视角，::after 生成的内容会在::before 生成的内容之上;

2. 伪元素默认未内联元素
