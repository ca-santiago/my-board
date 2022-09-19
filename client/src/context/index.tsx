import React from "react";
import { io, Socket } from "socket.io-client";

export interface SocketContext {
    socket: Socket;
}

export const socket = io('http://localhost:3001', {
    transports: ['websocket']
});

export const SocketContext = React.createContext<SocketContext>({
    socket
});