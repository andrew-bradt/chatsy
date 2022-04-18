const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const {v4: uuidv4} = require('uuid');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const db = require('./configs/db.config');

// Users Code - OOP
const {getUserInterests} = require('./helpers/queries')(db);
const ActiveUsers = require('./entities/ActiveUsers');
const Lobby = require('./entities/Lobby');
const Call = require('./entities/Call');

const activeUsers = new ActiveUsers();
const lobby = new Lobby();

const app = express();
const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: '*'
  }
});

// Socket Listeners
const enterLobby = require('./socket-listeners/enter-lobby')(activeUsers);

io.on('connection', (socket) => {
  socket.on('disconnect', () => {});
  socket.on('enter-lobby', enterLobby);
  socket.on('remove-criteria', () => {});
  socket.on('add-criteria', () => {});
  socket.on('call-established', ()=> {});
  socket.on('call-end', ()=> {});
  socket.on('send-msg', ()=> {});
});

app.use(cors());

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
const loginRoute = require('./routes/login')({
  db,
  getUserInterests, 
  activeUsers, 
  lobby
});

app.use('/login', loginRoute);

module.exports = {app, server};

