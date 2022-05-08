var a = 10
function f(){
    var b = 20
    function g(){
        var c = a+b
        return c
    }
    b = 30
    return g;
}

myF = f()
x = myF()
alert(x)
a = 100
y = myF()
alert(y)

var a;

console.log(a);

var a = 77777;