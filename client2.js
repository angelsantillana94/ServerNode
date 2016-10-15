var net = require('net');

// The server is in our same machine.
var client = net.connect(
    {port: 9000},
    function() { //'connect' listener
        console.log('client connected');
        client.write('world!\r\n');// This will be echoed by the server.
});

client.on('data', function(data) {
                    console.log(data.toString()); // Write the received data to stdout.
                    client.end(); // This says that no more data will be written to the Socket.
                });

client.on('end', function() {
                    console.log('client disconnected');
                });
