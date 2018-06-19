/*简单单例模式*/
// var Singleton = function(name) {
//   this.name = name;
//   this.instance = null;
// };

// Singleton.prototype.getName = function() {
//   console.log(this.name);
// };

// Singleton.getInstance = function(name) {
//   if (!this.instance) {
//     this.instance = new Singleton(name);
//   }
//   return this.instance;
// };

// var a = Singleton.getInstance("a");
// var b = Singleton.getInstance("b");

// b.getName();

/*透明单列*/

var CreateDiv = (function() {
  var instance;
  var CreateDiv = function(html) {
    if (instance) {
      return instance;
    }
    this.html = html;
    this.init();
    return (instance = this);
  };
  CreateDiv.prototype.init = function() {
    var div = document.createElement("div");
    div.innerHTML = this.html;
    document.body.appendChild(div);
  };
  return CreateDiv;
})();

var a = new CreateDiv("sven1");
var b = new CreateDiv("sven2");
alert(a === b); // true
