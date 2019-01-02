### 一：正常布局

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

4. 为了使一个固定定位的元素不相对于视口进行定位，你需要为容器元素设置 transform、perspective、filter 三个属性之一（不为默认值 none）。这样固定的元素就会相对于该块级元素偏移，而非视口。

### 二：flex

1. 默认的 flex-direction 值为 row，flex-direction 是 column 那么弹性项就会以块级元素排列的方向排布，然后交叉轴就会变为 row
2. flex-direction 属性设置 row-reverse 或 column-reverse 值来改变主轴上弹性项的方向
3. 这些 flex 的属性是用来控制弹性项在主轴上空间大小的。这三个属性是：

- flex-grow
- flex-shrink
- flex-basis

通常可以使用它们的简写形式：flex。第一个值代表 flex-grow，第二个是 flex-shrink，而第三个则是 flex-basis。
如果 flex-grow 的值是任意的正数，那么弹性项会被允许拉伸来占据更多的空间。
如果 flex-shrink 的值为任意的正数，那么当弹性项被设置了 flex-basis 后，元素溢出容器时会进行收缩。
flex-basis 会为弹性项设置未拉伸和压缩时的初始大小。
flex-grow 和 flex-shrink 的值可以是任意的正数。一个具有较大 flex-grow 值的弹性项会在容器有剩余空间时拉伸更大的比例；而一个具有更大 flex-shrink 值的项则会在容器空间不足时被压缩的更多。

### 三：盒模型

1. 不生成该元素，但是生成其所有子元素（display: contents）

### 四：对齐

1. align-items 和 justify-items 属性相对是 align-self 和 justify-self 属性的一种批量形式。这些属性会控制与元素在其网格区域（grid area）中的对齐情况。
2. align-content 和 justify-content 属性则会对网格中的行/列（tracks）进行对齐控制（网格容器中需要在排列完行/列元素后有多余的空间）。
3. 在弹性盒子中，align-items 和 align-self 用来解决交叉轴上的对齐问题，而 justify-content 则用于解决主轴上空间的分配。
4. 在交叉轴上，把弹性行（flex line）和额外空间包裹在弹性容器中之后，你就可以使用 align-content 了。
