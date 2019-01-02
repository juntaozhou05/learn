### 一：CSS3 中的属性对层叠上下文的影响

- 父元素的 display 属性值为 flex|inline-flex，子元素 z-index 属性值不为 auto 的- 时候，子元素为层叠上下文元素；
- 元素的 opacity 属性值不是 1；
- 元素的 transform 属性值不是 none；
- 元素 mix-blend-mode 属性值不是 normal`；
- 元素的 filter 属性值不是 none；
- 元素的 isolation 属性值是 isolate；
- will-change 指定的属性值为上面任意一个；
- 元素的-webkit-overflow-scrolling 属性值设置为 touch。

CSS3 中，元素属性满足以上条件之一，就会产生层叠上下文。我们用第 1 条来做一个简单的解释说明。

### 二：层叠优先级

1. inline/inline-block 元素的层叠顺序要高于 block(块级)/float(浮动)元素
