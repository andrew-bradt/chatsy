const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const users = require("./routes/users");
const contactInfo = require("./routes/contact-info");

const db = require('./configs/db.config');

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/users", users(db));
app.use("/api/contact-info", contactInfo(db));

module.exports = app;