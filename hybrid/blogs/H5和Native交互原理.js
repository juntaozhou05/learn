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

// 5.然后H5中即可调用原生中注册的函数
// // 调用方法一
// window.JSBridge.foo(); // 返回:'foo'
// // 调用方法二
// window.JSBridge.foo2('test'); // 返回:'foo2:test'

//6.H5调iOS：
// 以OC为例

// 首先，需要引入JavaScriptCore库

// #import <JavaScriptCore/JavaScriptCore.h>
// 然后原生需要注册API

// //webview加载完毕后设置一些js接口
// -(void)webViewDidFinishLoad:(UIWebView *)webView{
//     [self hideProgress];
//     [self setJSInterface];
// }

// -(void)setJSInterface{

//     JSContext *context =[_wv valueForKeyPath:@"documentView.webView.mainFrame.javaScriptContext"];

//     // 注册名为foo的api方法
//     context[@"foo"] = ^() {

//         //获取参数
//         NSArray *args = [JSContext currentArguments];
//         NSString *title = [NSString stringWithFormat:@"%@",[args objectAtIndex:0]];
//         //做一些自己的逻辑
//         //返回一个值  'foo:'+title
//         return [NSString stringWithFormat:@"foo:%@", title];
//     };

// }
// 之后前端就可以调用了

// // 调用方法,用top是确保调用到最顶级,因为iframe要用top才能拿到顶级
// window.top.foo('test'); // 返回:'foo:test'
