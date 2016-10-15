var ev = require('events')

var emitter = new ev.EventEmitter() // DON’T FORGET NEW OPERATOR !!!!!
var e1 = "print", e2 = "read" // Names of the events. // Auxiliary variables.
var num1 = 0, num2 = 0 // Listener functions are registered in the event emitter.

// Listener functions are registered in the event emitter.
emitter.on(e1, function() {
    console.log( "Event " + e1 + " has " + "happened " + ++num1 + " times.")})

emitter.on(e2, function() {
    console.log( "Event " + e2 + " has " + "happened " + ++num2 + " times.")})

// There might be more than one listener for the same event.
emitter.on(e1, function() {console.log( "Something has been printed!!");});

// Generate the events periodically...
setInterval( function() {emitter.emit(e1)}, 2000 ) // First event generated every 2s setInterval( function() {emitter.emit(e2)}, 3000 ) // Second event generated every 3s
setInterval( function() {emitter.emit(e2)}, 3000 ) // Second event generated every 3s
