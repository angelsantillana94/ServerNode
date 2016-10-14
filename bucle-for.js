var fun = require('./myFunctions');

var array = [1,2,3,"hello world!", "hello 2", "Bye!!!!", 0]
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (var i = 0; i <= 10; i++) {
    console.log(i);
}

var año = "\nmil novecientos noventa y cuatro";
console.log(array[3]);
var otro = 1993;
var real = 2.8765;
console.log(año);
console.log(año==otro);
console.log(typeof(año));
console.log("12345".length);
console.log(typeof(real));
console.log(typeof(NaN));

var obj = {marca: "audi", modelo: "a4", color: "blanco", marchas: 7, año:2016};
console.log(obj.año);


var texto = ["h","o","l","a","a","a","a","a"]

console.log(fun.changeTwo(texto));

const pi = 3.141592 //def constante

var x = function hola() {
    return null;
}
var y = x();

console.log(typeof(y)); //return type object


//var z = 7;
var z = "7";

console.log(z+3);

fun.alert("hello with function alert");

var now = new Date();
var greeting = "Good" + ((now.getHours() > 14) ? " evening." : " day.");
console.log(greeting);

/*function doble(x) {return 2*x} equivale a
var doble = function (x) {return 2*x} */
var doble = function (x) {
                return 2*x
            }
var d = doble(4);
console.log(d);

function saluda() {
    for(var i=0; i<arguments.length; i++) {
        console.log("Hola, " + arguments[i])
    }
    console.log(arguments.length); //numero argumentos
}
saluda("angel", "ana", "pedro");

var miArray = [1,2,3,4,5,6,7,8,9]
var otroArray

console.log(miArray.toString);

var obj3 = {marca: 'audiiii', modelo:'a6', color:'blanco', marchas:10}
var miString = JSON.stringify(obj3);

//console.log(JSON.parse(JSON.stringify(obj3)));

console.log(JSON.parse(miString));
