var ws = new WebSocket('ws://localhost:8080', ['rocky-repl']);

ws.onopen = function() {
  console.log("PKJS: Connected to Rocky.js REPL server!")
};

ws.onmessage = function (evt) {
  Pebble.postMessage(JSON.parse(evt.data));
};

ws.onclose = function() {
  console.log("PKJS: Connection is closed..."); 
};

Pebble.on('message', function(event) {
  // Get the message that was passed
  var message = event.data;
  ws.send(JSON.stringify(message));
});
