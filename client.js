var net = require('net');

if ( process.argv.length != 4 ) {
    console.log('uso: node client_net function_id number_value');
    process.exit(0);
}

var func = process.argv[2];
var numb = Math.abs(parseInt(process.argv[3]));

// The server is in our same machine.
var client = net.connect( {port: 9000}, function() { //'connect' listener
    console.log('client connected');
    request = {"func":func, "numb":numb};
    client.write( JSON.stringify(request) );
});

client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});

client.on('end', function() {
    console.log('client disconnected');
});
