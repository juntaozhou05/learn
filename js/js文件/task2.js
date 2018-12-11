//1. 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
  // your implement
  let flag = false;
  if (element.className === "" || element.className === "undefined") {
    element.className = newClassName;
  }
  element.className.split(" ").forEach(element => {
    if (element === newClassName) {
      flag = true;
    }
  });
  if (flag) {
    return;
  }
  element.className = element.className + " " + newClassName;
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
  // your implement
  if (element.className === "" || element.className === "undefined") {
    return false;
  }
  let arr = element.className.split(" ");
  arr.forEach((item, index) => {
    if (item === oldClassName) {
      arr.splice(index, 1);
    }
  });
  if (arr.length < 1) {
    element.removeAttribute("class");
    return;
  }
  element.className = arr.join(" ");
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
  // your implement
  return console.log(element.parentNode === siblingNode.parentNode);
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
  // your implement
  return {
    x: element.getBoundingClientRect().left,
    y: element.getBoundingClientRect().top
  };
}

//test
let box1 = document.getElementById("box1");
let box3 = document.getElementById("box3");
//添加
// document.querySelector(".box1").onclick = e => {
//   addClass(e, this, "box2");
// };
//删除
// document.querySelector(".box1").onclick = e => {
//   removeClass(e.target, "box1");
// };
//判断是否同一个父元素
// isSiblingNode(box1, box3);
//元素相对于浏览器位置
//console.log(getPosition(box1));

//2. 实现一个简单的Query
function $(selector) {
  return document.querySelector(selector);
}

// 可以通过id获取DOM对象，通过#标示，例如
$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
$("a"); // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
$(".classa"); // 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
$("[data-log]"); // 返回第一个包含属性data-log的对象

$("[data-time='2015']"); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
$("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象

//3. 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
  // your implement
  element.addEventListener(event, listener);
}

// test
function testFn() {
  console.log(123);
}
addEvent($("#doma"), "click", testFn);

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
  // your implement
  element.removeEventListener(event, listener);
}

//test
removeEvent($("#doma"), "click", testFn);

//4.事件代理
// 先简单一些
function delegateEvent(element, tag, eventName, listener) {
  // your implement
  element.addEventListener(eventName, listener);
}
function clickHandle(e, tag) {
  if (e.target.tagName === "li".toUpperCase()) {
    console.log(222);
  }
}

$.delegate = delegateEvent;

// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
$.delegate($("#list"), "li", "click", clickHandle);

//5.自己封装ajax
function ajax(url, opt) {
  opt = opt || {};
  opt.method = opt.method.toUpperCase();
  opt.async = opt.async || true;
  opt.data = opt.data || {};
  opt.success = opt.success || function() {};
  var xmlHttp = XMLHttpRequest();
  var params = [];
  for (var key in opt.data) {
    parms.push(key + "=" + opt.data[key]);
  }
  var postData = params.join("&");
  if (opt.method.toUpperCase() == "POST") {
    xmlHttp.open(opt.method, opt.url, opt.async);
    xmlHttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;charset=utf-8"
    );
    xmlHttp.send(postData);
  } else if (opt.method.toUpperCase() == "GET") {
    xmlHttp.open(opt.method, opt.url + "?" + postData, opt.async);
    xmlHttp.send(null);
  }
  xmlHttp.onreadyStatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      opt.success(xmlHttp.responseText);
    }
  };
}

//6.小练习
//1.实现一个倒计时功能
var btn = document.getElementById("submit");
var textp = document.getElementById("textp");
btn.onclick = function() {
  var timevalue = document.querySelector("#inputTime").value;
  var patt = /^(\d{1,4})(-)(\d{1,2})\2(\d{1,2})$/;
  if (patt.test(timevalue) == false) {
    //如果不正确
    textp.innerHTML = "输入格式不满足YYYY-MM-DD";
    return false;
  } else {
    textp.innerHTML = "这里显示倒计时";
  }
  //获取输入的年月日
  var timearray = timevalue.split("-");
  //ShowLeftTime(timearray[0],timearray[1],timearray[2]);
  setInterval(function() {
    ShowLeftTime(timearray[0], timearray[1], timearray[2]);
  }, 1000);
};
function ShowLeftTime(year, month, date) {
  //得出剩余时间
  var now = new Date();
  var endDate = new Date(year, month - 1, date);
  var leftTime = endDate.getTime() - now.getTime();
  var leftsecond = parseInt(leftTime / 1000);
  var day = Math.floor(leftsecond / (60 * 60 * 24));
  var hour = Math.floor((leftsecond - day * 24 * 60 * 60) / 3600);
  var minute = Math.floor((leftsecond - day * 24 * 60 * 60 - hour * 3600) / 60);
  var second = Math.floor(
    leftsecond - day * 60 * 60 * 24 - hour * 60 * 60 - minute * 60
  );
  //显示剩余时间
  textp.innerHTML =
    "距离" +
    year +
    "年" +
    month +
    "月" +
    date +
    "日" +
    "还有" +
    day +
    "天" +
    hour +
    "小时" +
    minute +
    "分" +
    second +
    "秒";
}
