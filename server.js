var net = require('net');
var fun = require('./myFunctions');

var end_listener = function() {console.log('server disconnected');}
var error_listener = function() {console.log('some connection error');}
var bound_listener = function() {console.log('server bound');}

var server = net.createServer(
    function(c) { // 'connection' listener
        console.log('server connected');
        c.on('end', end_listener);
        c.on('error', error_listener);
        c.on('data', function(data){
            var obj = JSON.parse(data);
            var res;
            if ( typeof(obj.numb) != 'number' ) {
                res = NaN;
            }
            else { switch (obj.func) {
                case 'fibo': res = fun.fibo(obj.numb); break;
                case 'fact': res = fun.fact(obj.numb); break;
                default: res = NaN;
            }}
            c.write( obj.func+'('+obj.numb+') = '+res );
        });
    });
    
server.listen(9000, bound_listener);
