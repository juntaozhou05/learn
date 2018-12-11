//通用组件 外壳固定 内部用slot
<navigation-link url="/profile">
  Your Profile
</navigation-link>
//然后你在 <navigation-link> 的模板中可能会写为：
<a
v-bind:href="url"
  class="nav-link"
>
  <slot></slot>
</a>

//当组件渲染的时候，这个 <slot> 元素将会被替换为“Your Profile”。


//具名插槽
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
    </div>

//在向具名插槽提供内容的时候，我们可以在一个父组件的 <template> 元素上使用 slot 特性：
<base-layout>
  <template slot="header">
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template slot="footer">
    <p>Here's some contact info</p>
  </template>
    </base-layout>

//另一种 slot 特性的用法是直接用在一个普通的元素上：

<base-layout>
  <h1 slot="header">Here might be a page title</h1>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <p slot="footer">Here's some contact info</p>
</base-layout>