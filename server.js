const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static frontend files
app.use(express.static('public'));

//temporary in memory storage

const messages = [];

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.emit('chat history',messages);
    socket.on('chat message', (msg) => {
        messages.push(msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
