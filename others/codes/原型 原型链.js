//1.
function Fn() {
    this.x = 100
    this.y = 200
    this.z = 300
    this.getX = function() {
        console.log(this.x)
    }
}
Fn.prototype.getX = function() {
    console.log(this.x)
}
Fn.prototype.getY = function() {
    console.log(this.y)
}

var f1 = new Fn()
var f2 = new Fn()

console.log(f1.__proto__)
