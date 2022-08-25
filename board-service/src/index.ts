import express from 'express';
import IO from 'socket.io';
import http from 'http';
import 'dotenv/config';

const app = express();
const server = http.createServer(app);
const io = new IO.Server(server);

io.on('connetion', (socket) => {
    console.log('New connection: ', socket.id);
});

app.get('/', (req, res) => {
    res.send('Welcome');
});

server.listen(process.env.PORT, () => {
    console.log('Server is running')
});
