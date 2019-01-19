### 一：计算两个数组的交集、差集、并集、补集

```
var a = [1,2,3,4,5]
var b = [2,4,6,8,10]
console.log("数组a：", a);
console.log("数组b：", b);

var sa = new Set(a);
var sb = new Set(b);

// 交集
let intersect = a.filter(x => sb.has(x));

// 差集
let minus = a.filter(x => !sb.has(x));

// 补集
let complement  = [...a.filter(x => !sb.has(x)), ...b.filter(x => !sa.has(x))];

// 并集
let unionSet = Array.from(new Set([...a, ...b]));

console.log("a与b的交集：", intersect);
console.log("a与b的差集：", minus);
console.log("a与b的补集：", complement);
console.log("a与b的并集：", unionSet);
```
### 二：http请求options
1. 出于安全考虑，并不是所有域名访问后端服务都可以。其实在正式跨域之前，浏览器会根据需要发起一次预检（也就是option请求），用来让服务端返回允许的方法（如get、post），被跨域访问的Origin（来源或者域），还有是否需要Credentials(认证信息)等。那么浏览器在什么情况下能预检呢？
2. 浏览器将CORS请求分为两类：简单请求（simple request）和非简单请求（not-simple-request）,简单请求浏览器不会预检，而非简单请求会预检。这两种方式怎么区分？

**同时满足下列三大条件，就属于简单请求，否则属于非简单请求**

1.请求方式只能是：GET、POST、HEAD
2.HTTP请求头限制这几种字段：Accept、Accept-Language、Content-Language、Content-Type、Last-Event-ID
3.Content-type只能取：application/x-www-form-urlencoded、multipart/form-data、text/plain

对于简单请求，浏览器直接请求，会在请求头信息中，增加一个origin字段，来说明本次请求来自哪个源（协议+域名+端口）。服务器根据这个值，来决定是否同意该请求，服务器返回的响应会多几个头信息字段

非简单请求是对那种对服务器有特殊要求的请求，比如请求方式是PUT或者DELETE，或者Content-Type字段类型是application/json。都会在正式通信之前，增加一次HTTP请求，称之为预检。浏览器会先询问服务器，当前网页所在域名是否在服务器的许可名单之中，服务器允许之后，浏览器会发出正式的XMLHttpRequest请求，否则会报错。

3. 很明显，请求头中预检请求不会携带cookie，正式请求会携带cookie和参数。跟普通请求一样，响应头也会增加同样字段。

一旦服务器通过了“预检”请求，以后每次浏览器正常的CORS请求，就都跟简单请求一样。

### 三：JS如何用Math.random()来生成指定范围内（如：1-100）的随机数

1.包括下线数字（lower）不包括上限数字（upper）
```
/**
 * 产生随机整数，包含下限值，但不包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower)) + lower;

```
2. 包括下线数字（lower）也包括上限数字（upper）
```
/**
 * 产生随机整数，包含下限值，包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower+1)) + lower;
} 

```
3. 产生一个随机的rgb颜色
```
/**
 * 产生一个随机的rgb颜色
 * @return {String}  返回颜色rgb值字符串内容，如：rgb(201, 57, 96)
 */
function randomColor() {
	// 随机生成 rgb 值，每个颜色值在 0 - 255 之间
	var r = random(0, 256),
		g = random(0, 256),
		b = random(0, 256);
	// 连接字符串的结果
	var result = "rgb("+ r +","+ g +","+ b +")";
	// 返回结果
	return result;
```