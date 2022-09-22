import React from "react";
import { io, Socket } from "socket.io-client";

export interface ISocketContext {
    socket: Socket;
}

const socket = io('http://localhost:3001', {
    transports: ['websocket']
});

export const SocketContext = React.createContext<ISocketContext>({
    socket
});