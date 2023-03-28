"use strict";

const mongoose = require('mongoose');
const dbConfig = require("./dbConfig.json");

const uri = `mongodb+srv://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}/?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

module.exports = db;