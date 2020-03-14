/*Server*/
var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({port:8100});

var clientList = [];

wss.on('connection', function connection(ws) {
    clientList.push(ws)
    /*
    var clientId = ws._ultron.id;
    var obj1 = clientList.find(function (obj) { return obj._ultron.id === clientId; });
    */
    ws.on('message', function (message) {
        var msg = message;
        console.log('received: %s', message);

      //  if(clientId == 1){ 
        //    clientList[1].send(msg);
      //  }

     //   if(clientId == 2){
          //  clientList[0].send(msg);
      //  }
					sendAll(message);
    });
    ws.send("NEW USER JOINED");
});

function sendAll (message) {
    for (var i=0; i<clientList.length; i++) {
        clientList[i].send("Message: " + message);
    }
};
