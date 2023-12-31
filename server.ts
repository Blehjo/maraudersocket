import { Socket } from "socket.io";
import { router } from "./Routes";

const http = require('http'); 
const socketIo = require('socket.io');
const fs = require('fs');
const events = require('events');
const five = require("johnny-five");
const express = require('express');
const index = require('./index');

const app = express();

const eventEmitter = new events.EventEmitter();

app.use("/", router);

const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
      origin: ["http://localhost:3001"],
      methods: ['GET', 'POST'],
    },
    maxHttpBufferSize: 1e8,
});

// Basic Example of how to call backend and establish socket connection
// getSingleAction("1")
// .then((response) => {
//     const board = new five.Board();
//     board.on("ready", function() {
//         const pin = five.Pin(response.pinId);
//         eventEmitter.on(response.eventType, function() {

//         })
//     })

//     io.on("connection", function(socket: any) {
//         socket.on(response.eventType, (arg: any) => {
//             eventEmitter.emit(response.eventType);
//         });    
//     });
// });

var board = new five.Board();

board.on("ready", function() {
    var pin = new five.Pin(2);
    pin.high();

    eventEmitter.on('lightsoff', function() {
        pin.low()
    });

    eventEmitter.on('lightson', function() {
        pin.high()
    });
    
});

io.on('connection', function(socket: Socket) {
    socket.on('lightson', (arg) => {
        eventEmitter.emit('lightson')
    });

    socket.on('lightsoff', (arg) => {

        eventEmitter.emit('lightsoff')
    });
    
});
//  ts-node-esm server.ts   
server.listen(3000);