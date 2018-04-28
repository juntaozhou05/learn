// 为element增加一个样式名为newClassName的新样式
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
function removeClass(e, element, oldClassName) {
  // your implement
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
  // your implement
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
  // your implement
}

//添加
// document.querySelector(".box1").onclick = e => {
//   addClass(e, this, "box2");
// };
document.querySelector(".box1").onclick = e => {
  addClass(e.target, "box2");
};
