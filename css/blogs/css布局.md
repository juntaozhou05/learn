1. 当你使某个元素浮动并让文字环绕它时，内容的 line box 被截断了。如果你让一个元素浮动，同时为紧跟着的包含文本的元素设置一个背景色，你会发现背景色会出现在浮动元素下方。
2. 浮动之后父元素元素塌陷，伪元素清除浮动

```
.box1::after {
    content: "";
    display: block;
    clear: both;
}
```

3. 触发 BFC 的方式（一下任意一条就可以）

- float 的值不为 none
- overflow 的值不为 visible
- display 的值为 table-cell、tabble-caption 和 inline-block 之一
- position 的值不为 static 或则 releative 中的任何一个

**备注：**  
display:flow-root 就是说使用这个属性之后，该元素会生成一个块级容器框，并且使用的是流布局。为里面内容创建新的块级格式化上下文。
