const express = require("express");
const session = require('express-session');
var cookieParser = require('cookie-parser');
const jsonParser = express.json();
const app = express();
const http = require('http');
const mysql = require("mysql2");
const apiRouter = require("./routes/apiRouter.js");
const WebSocket = require('ws');

global.connection = mysql.createConnection({
    host: "141.8.192.151",
    user: "f0386668_pikachu",
    database: "f0386668_pikachu",
    password: "123456789"
}).promise();

connection.connect()
.then(res=>{console.log(`Connected to DB`)})
.catch(err=>{console.log(`Connect to DB error: ${err}`)})

app.use(cookieParser());

app.use("/api", apiRouter);
app.use("/", express.static(__dirname + "/build"));
app.use("/", function(req, resp){
    resp.redirect("/");
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ noServer: true });

server.on('upgrade', function upgrade(request, socket, head) {
    wss.handleUpgrade(request, socket, head, function done(ws) {
        wss.emit('connection', ws, request, request);
    });
});

wss.on('connection', function connection(ws, request) {
    ws.on('pong', heartbeat);

    wss.on('open', function open(){
        ws.isAlive = true;
        console.log(`connected`);
    });

    ws.on('message', function message(msg) {
        console.log(`Received message ${msg} from user`);
    });
});

const interval = setInterval(function ping() {
    wss.clients.forEach(function each(ws) {
        if (ws.isAlive === false){
            console.log(`disconnected`);
            return ws.terminate();
        }
        ws.isAlive = false;
        ws.ping(noop);
    });
}, 5000);

function noop() {}

function heartbeat() {
    this.isAlive = true;
}

server.listen(3000);
