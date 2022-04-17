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
const Call = require('./entities/Call');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', socket => {
  const onlineUser = [];

  console.log('Client connected');

  socket.on('peerId', msg => {
    onlineUser.push(msg.peerId);
    console.log(msg);
    socket.broadcast.emit('new_user', { onlineUser });
  });

  socket.on('endCall', () => {
    socket.broadcast.emit('endCall');
  });

});

app.use(cors());

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = {app, server};

// DRIVER CODE - USERS OOP

const activeUsers = new ActiveUsers();
Promise.all([getUserInterests('link@yahoo.com'), getUserInterests('lisa.simpson@gmail.com')])
  .then(([user1, user2]) => {
    const user1Obj = activeUsers.addUser(user1, 81293892);
    const user2Obj = activeUsers.addUser(user2, 9918283);

    const call = new Call(user1Obj, user2Obj);
    console.log(user1Obj);
    console.log(user2Obj);
    console.log(call);
  });
