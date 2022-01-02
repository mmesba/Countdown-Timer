var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let func = require('./trc')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Initialize view engine
app.use('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

setInterval(() => {
    func()
}, 1000*60*15);



module.exports = app;
