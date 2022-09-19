import express from "express";
import cors from 'cors';
import IO from "socket.io";
import http from "http";
import "dotenv/config";

import { boardRouter, registerBoardEvents } from "./router/board";

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new IO.Server(server, {
  cors: {
    origin: "*",
    methods: ["*"],
  },
});

io.on("connection", (socket: IO.Socket) => {
  console.log("New connection: ", socket.id);
  registerBoardEvents(socket, io);

  socket.on("join-board", ({ boardId }) => {
    console.log("joining to board", boardId);
    // socket.join(boardId);
  });
});

app.use(boardRouter);
app.get("/ping", (_, res) => {
  res.send("pong");
});

server.listen(process.env.PORT, () => {
  console.log("Server is running on port: ", process.env.PORT);
});
