// 结合router，缓存部分页面

// 使用$route.meta的keepAlive属性：

// <keep-alive>
//     <router-view v-if="$route.meta.keepAlive"></router-view>
// </keep-alive>
// <router-view v-if="!$route.meta.keepAlive"></router-view>
// 需要在router中设置router的元信息meta：

//...router.js
export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: "/page1",
      name: "Page1",
      component: Page1,
      meta: {
        keepAlive: true // 需要被缓存
      }
    }
  ]
});
