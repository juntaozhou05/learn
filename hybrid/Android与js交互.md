### 一：交互方式总结

1. 对于 Android 调用 JS 代码的方法有 2 种：

- 通过 WebView 的 loadUrl（）
- 通过 WebView 的 evaluateJavascript（）

2. 对于 JS 调用 Android 代码的方法有 3 种：

- 通过 WebView 的 addJavascriptInterface（）进行对象映射
- 通过 WebViewClient 的 shouldOverrideUrlLoading ()方法回调拦截 url
- 通过 WebChromeClient 的 onJsAlert()、onJsConfirm()、onJsPrompt（）方法回调拦截 JS 对话框 alert()、confirm()、prompt（） 消息

### 二：Android 调用 js

1. 通过 WebView 的 loadUrl（）

- 实例介绍：点击 Android 按钮，即调用 WebView JS（文本名为 javascript）中 callJS（）

2. 通过 WebView 的 evaluateJavascript（）

优点：该方法比第一种方法效率更高、使用更简洁。
因为该方法的执行不会使页面刷新，而第一种方法（loadUrl ）的执行则会。
Android 4.4 后才可使用

### 三：js 调用 Android

1. 通过 WebView 的 addJavascriptInterface（）进行对象映射
2. 通过 WebViewClient 的方法 shouldOverrideUrlLoading ()回调拦截 url

具体原理：
Android 通过 WebViewClient 的回调方法 shouldOverrideUrlLoading ()拦截 url
解析该 url 的协议
如果检测到是预先约定好的协议，就调用相应方法
