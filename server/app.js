const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// Configs
const db = require('./configs/db.config');
const {lobby, activeUsers} = require('./configs/active-users-and-lobby');

// Users Code
const app = express();
const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: '*'
  }
});

// matching function
const matchUsers = require('./helpers/matchUsers');

// Socket Listeners
const enterLobby = require('./socket-listeners/enter-lobby')(activeUsers, lobby);
const leaveLobby = require('./socket-listeners/leave-lobby')(activeUsers, lobby);
const addCriteria = require('./socket-listeners/add-criteria')(lobby);
const removeCriteria = require('./socket-listeners/remove-criteria')(lobby);
const addSocketId = require('./socket-listeners/add-socket-id')(activeUsers);
const sendMsg = require('./socket-listeners/send-msg')(io);
const sendContactInfo = require('./socket-listeners/send-contact-info')(io, activeUsers);
const endCall = require('./socket-listeners/end-call')(io);
const disconnect = require('./socket-listeners/disconnect')(activeUsers, lobby);

io.on('connection', (socket) => {
  socket.on('add-socket-id', ({userId}) => addSocketId(userId, socket.id));
  socket.on('enter-lobby', ({userId}) => enterLobby(userId));
  socket.on('leave-lobby', ({userId}) => leaveLobby(userId));
  socket.on('add-criteria', ({userId, interest}) => addCriteria(interest, userId));
  socket.on('remove-criteria', ({userId, interest}) => removeCriteria(interest, userId));
  socket.on('send-msg', ({msg, remoteSocketId}) => sendMsg(remoteSocketId, msg));
  socket.on("send-contact-info", ({ userId, remoteSocketId }) => sendContactInfo(remoteSocketId, userId));
  socket.on("end-call", ({ remoteSocketId }) => endCall(remoteSocketId));
  socket.on('disconnect', () => disconnect(socket.id));
  
  matchUsers(activeUsers, lobby, io);
});

app.use(cors());

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
const loginRoute = require("./routes/login")({
  db,
  activeUsers,
  lobby
});

const { authURL } = require("./configs/oauth.config");

app.use('/login', loginRoute);
app.use('/oauth', require('./routes/oauth')(authURL));



module.exports = {app, server};