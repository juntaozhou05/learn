### 1.递归组件

组件在它的模板内可以递归地调用自己， 只要给组件设置 name 的选项就可以了。

```
  <div id="app19">
   <my-component19 :count="1"></my-component19>
  </div>
Vue.component('my-component19',{
 name: 'my-component19', //其实当你利用 Vue.component 全局注册了一个组件，全局的ID会被自动设置为组件的name。
 props: {
  count: {
   type: Number,
   default: 1
  }
 },
 template: '<div><my-component19 :count="count+1" v-if="count<3"></my-component19></div>'
});
var app19 = new Vue({
 el: '#app19'
});
```

设置 name 后，在组件模板内就可以递归使用了，不过需要注意的是，必须给一个条件来限制递归数量  
否则会抛出错误： max stack size exceeded 。  
组件递归使用可以用来开发一些具有未知层级关系的独立组件，比如级联选择器和树形控件等。
