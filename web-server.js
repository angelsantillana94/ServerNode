var http = require('http');
http.createServer(function (req, res) {
    // res is a ServerResponse.
    // Its writeHead() method sets the response header.
    res.writeHead(200, {'Content-Type': 'text/plain'})
    // The end() method is needed to communicate that both the header
    // and body of the response have already been sent. As a result, the response can
    // be considered complete. Its optional argument may be used for including the last
    // part of the body section.
    res.end('Hello World\n')
    // listen() is used in an http.Server in order to start listening for
    // new connections. It sets the port and (optionally) the IP address.
}).listen(1337, "127.0.0.1")
console.log('Server running at http://127.0.0.1:1337/')
