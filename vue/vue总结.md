### 一：DOM 事件修饰符

```
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

### 二：注册全局通用组件

使用 require.context() 方法来创建自己的（模块）上下文，从而实现自动动态 require 组件。这个方法需要 3 个参数：要搜索的文件夹目录，是否还应该搜索它的子目录，以及一个匹配文件的正则表达式。

我们在 components 文件夹添加一个叫 global.js 的文件，在这个文件里借助 webpack 动态将需要的基础组件统统打包进来。

```
import Vue from 'vue'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const requireComponent = require.context(
  '.', false, /\.vue$/
   //找到components文件夹下以.vue命名的文件
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = capitalizeFirstLetter(
    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
    //因为得到的filename格式是: './baseButton.vue', 所以这里我们去掉头和尾，只保留真正的文件名
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
```

最后我们在 main.js 中 import 'components/global.js'，然后我们就可以随时随地使用这些基础组件，无需手动引入了。

### 三：不同页面用的同一个组件，页面没有刷新

给 router-view 添加一个 unique 的 key，这样即使是公用组件，只要 url 变化了，就一定会重新创建这个组件。（虽然损失了一丢丢性能，但避免了无限的 bug）。同时，注意我将 key 直接设置为路由的完整路径，一举两得。

```
<router-view :key="$route.fullpath"></router-view>
```
