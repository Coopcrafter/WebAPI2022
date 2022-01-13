<<<<<<< HEAD
var WebSocketServer = require('ws').Server
=======
var WebSocketServer = require('ws').Server,
>>>>>>> 155c3a9d455b25557dd5102d2c233daf9b227eb4
wss = new WebSocketServer({port:3000}),
clients = [],
messages = []

wss.on('connection', function(ws){
    var index = clients.push(ws)-1
    console.log(wss.clients)
    var msgText = messages.join('<br>')
    ws.send(msgText)

    ws.on('message', function(message){
        messages.push(message)

        console.log('Received %s from %s', message, index)

        wss.clients.forEach(function(conn){
            conn.send(message)
        })
    })
<<<<<<< HEAD
=======

>>>>>>> 155c3a9d455b25557dd5102d2c233daf9b227eb4
})

console.log("ChatSocket connected on port 3000")