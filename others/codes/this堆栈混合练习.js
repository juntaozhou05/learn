var num = 10, 
    obj =  {num:20}
obj.fn = (function (num) {
    num = this.num + 10
    this.num = num + 10
    return function () {
        this.num += ++num
    }
})(num)
var fn = obj.fn
fn()
obj.fn()
console.log(num, obj.num)