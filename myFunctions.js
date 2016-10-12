function fibo(n) { return (n<2) ? 1 : fibo(n-2) + fibo(n-1) }
function fact(n) { return (n<2) ? 1 : n * fact(n-1) }

function changeTwo(txt){
    for (var i = 0; i < txt.length; i = i+2) {
        txt[i] = txt[i].toUpperCase();
    }
        return txt;
}

function alert(x) {
    return console.log(x);
}


exports.fibo = fibo
exports.fact = fact
exports.changeTwo = changeTwo
exports.alert = alert
