###1.BFC:  
#####含义:
Block Formatting Contexts（BFC）  
块级元素格式化上下文  
它决定了块级元素如何对它的内容进行布局，以及与其他元素的关系和相互关系  
块级元素：父级（是一个块元素）  
内容：子元素（是一个块元素）  
其他元素：与内容同级别的兄弟元素  
相互作用：BFC 里的元素与外面的元素不发生影响

######触发条件：
1.float 的值不为 none  
2.overflow 的值不为 visible  
3.display 的值为 table-cell、tabble-caption 和 inline-block 之一  
4.position 的值不为 static 或则 releative 中的任何一个

######FBC 布局与普通文档流布局区别  
1.浮动的元素是不会被父级计算高度  
2.非浮动元素会覆盖浮动元素的位置  
3.margin 会传递给父级  
4.两个相邻元素上下 margin 会重叠

#####BFC 布局规则  
1.浮动的元素会被父级计算高度（父级触发了 BFC）  
2.非浮动元素不会覆盖浮动元素位置（非浮动元素触发了 BFC）  
3.margin 不会传递给父级（父级触发了 BFC）  
4.两个相邻元素上下 margin 会重叠（给其中一个元素增加一个父级，然后让他的父级触发 BFC）
