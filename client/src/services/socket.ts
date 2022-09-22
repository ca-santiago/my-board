import { io } from "socket.io-client";

export const socketService = io('http://localhost:3001', {
    transports: ['websocket']
});
