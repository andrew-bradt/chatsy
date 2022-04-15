const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const db = require('./configs/db.config');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());

const users = require("./routes/users");
const contactInfo = require("./routes/contact-info");

// socket io
const {v4: uuidv4} = require('uuid');

const userIDs = {};

io.on('connection', (socket) => {
  const userID = uuidv4();
  userIDs[userID] = null;
  socket.send(`Your id is ${userID}`);
});

// middleware, routes

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/users", users(db));
app.use("/api/contact-info", contactInfo(db));

module.exports = {app, server};