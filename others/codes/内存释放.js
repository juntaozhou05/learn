var i = 10
function fn() {
    return function (n) {
        console.log(n + (++i))
    }
}
var f = fn()
f(20)//31
fn()(20)//32
fn()(30)//43
fn(30)//44