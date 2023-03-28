"use strict";

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require ("./config/db");

// Path routes
var indexRouter = require('./routes/index');
var reservationRouter = require('./routes/reservations');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// DB
app.use((req, res, next) => {
  req.db = db;
  console.log("DB working");
  next();
});

// Routes
app.use('/', indexRouter);
app.use('/reservations', reservationRouter);

// Cors
const corsOptions = {
  origin: ['https://caliz.netlify.app/', 'http://localhost:3000']
};
app.use(cors(corsOptions));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
