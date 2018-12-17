### 一.margin

1. margin 使用百分比时候，始终参照父元素（如果是浮动元素，则参照 position 为 relative 的父元素）的宽度来进行求职。
2. 对于 width/height 未定的普通 block 元素，margin 可以拓展其可视区域（其 width 等于父元素减去左右 margin 之和）
3. margin 外边距重叠：两个或多个快级盒子的垂直相邻边界会重合。
