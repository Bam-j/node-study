const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.on('event1', () => {
    console.log('event1');
});

myEvent.addListener('event2', () => {
    console.log('event2');
});

myEvent.once('event3', () => {
    console.log('event3');
});

myEvent.emit('event1');
myEvent.emit('event2');
myEvent.emit('event3');
myEvent.emit('event3');

myEvent.removeAllListeners('event2');
myEvent.emit('event2');

console.log(myEvent.listenerCount('event1'));
console.log(myEvent.listenerCount('event2'));
console.log(myEvent.listenerCount('event3'));