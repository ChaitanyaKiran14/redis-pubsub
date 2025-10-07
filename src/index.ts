import WebSocket, { WebSocketServer } from "ws";
import express from "express";

const app = express();
const httpServer = app.listen(8080);

app.get('/', (req,res) =>{
    res.send("hey there")
})

const wss = new WebSocketServer({ server: httpServer });
const socket = new WebSocket("ws://localhost:8080");


wss.on("connection", function connection(ws) {
  ws.on("error", (error) => console.log(error));

  ws.on("message", function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.send("hey from server");
});
