// 1.原生和前端的交互有两种方式：url scheme以及JavaScriptCore（在Android中是addJavascriptInterface

// 2.url scheme原理：H5 -> 触发一个url（每一个功能代表的url都不同）-> Native端捕获到url
// -> Native端分析属于哪一个功能并执行 -> Native端调用H5中的方法将执行结果回调给H5

// 3.H5直接与Native交互：
// 分别包括Android，iOS中H5和原生互相调用，总结如下：
// H5调Android-原生通过addJavascriptInterface注册，然后H5直接调用
// Android调H5-原生通过loadUrl来调用H5，4.4及以上还可以通过evaluateJavascript调用
// H5调iOS-原生通过JavaScriptCore注册（需ios7以上），然后H5直接调用
// iOS调H5-通过stringByEvaluatingJavaScriptFromString

//4.H5调Android：首先，原生webview需要先注册可供前端调用的JS函数
//WebSettings webSettings = mWebView.getSettings();
//  // Android容器允许JS脚本，必须要
// webSettings.setJavaScriptEnabled(true);
// // Android容器设置侨连对象
// mWebView.addJavascriptInterface(getJSBridge(), "JSBridge");
