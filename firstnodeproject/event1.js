//Events and event emitters

var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('myCustomEvent', function(){
	console.log("Event fired!!!");
});

setTimeout(function(){
	eventEmitter.emit('myCustomEvent');
},2000)