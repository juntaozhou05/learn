//1.JSBridge是Native代码与JS代码的通信桥梁。目前的一种统一方案是:H5触发url scheme->Native捕获url scheme->原生分析,执行->原生调用h5。

//2.url scheme这个概念,那这到底是什么呢?
// url scheme是一种类似于url的链接,是为了方便app直接互相调用设计的
// 具体为,可以用系统的OpenURI打开一个类似于url的链接(可拼入参数),然后系统会进行判断,如果是系统的url scheme,则打开系统应用,否则找看是否有app注册这种scheme,打开对应app
// 需要注意的是,这种scheme必须原生app注册后才会生效,如微信的scheme为(weixin://)
// 而本文JSBridge中的url scheme则是仿照上述的形式的一种方式
// 具体为,app不会注册对应的scheme,而是由前端页面通过某种方式触发scheme(如用iframe.src),然后Native用某种方法捕获对应的url触发事件,然后拿到当前的触发url,根据定义好的协议,分析当前触发了那种方法,然后根据定义来执行等

// 3.要实现JSBridge,我们可以进行关键步骤分析
// 第一步:设计出一个Native与JS交互的全局桥对象
// 第二步:JS如何调用Native
// 第三步:Native如何得知api被调用
// 第四步:分析url-参数和回调的格式
// 第五步:Native如何调用JS
// 第六步:H5中api方法的注册以及格式

// 4.第一步:设计出一个Native与JS交互的全局桥对象
// 我们规定, JS和Native之间的通信必须通过一个H5全局对象JSbridge来实现, 该对象有如下特点
// 该对象名为"JSBridge",是H5页面中全局对象window的一个属性
// var JSBridge = window.JSBridge || (window.JSBridge = {});
// 该对象有如下方法
// registerHandler( String,Function )H5调用 注册本地JS方法,注册后Native可通过JSBridge调用。调用后会将方法注册到本地变量messageHandlers 中
// callHandler( String,JSON,Function )H5调用 调用原生开放的api,调用后实际上还是本地通过url scheme触发。调用时会将回调id存放到本地变量responseCallbacks中
// _handleMessageFromNative( JSON )Native调用 原生调用H5页面注册的方法,或者通知H5页面执行回调方法

5;
