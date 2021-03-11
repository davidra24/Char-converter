const http = require('http')
const express = require('express')
const cors = require('cors')
const socketio = require('socket.io')
const app = express()
const sockets = require('./sockets')
const port = process.env.PORT || 5000

const server = http.createServer(app);
const io = socketio(server, { cors: { origin: '*' } });
app.use(cors());

sockets(io)

server.listen(port, () => {
    console.log(`Server on port ${port}`)
})
app.get('/', (req, res) => {
    res.send('Hola mundo');
});