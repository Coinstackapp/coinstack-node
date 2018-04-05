var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');

var index = require('./routes/index');

var users = require('./routes/users');
var register = require('./routes/auth/register');
var login = require('./routes/auth/login');

var support = require('./routes/support');

var news = require('./routes/news/news');
var allNews = require('./routes/news/allNews');

var charge = require('./routes/stripe/charge');
var customer = require('./routes/stripe/customer');

var price = require('./routes/crypto/price');
var kraken = require('./routes/crypto/purshase');

var rehive = require('./routes/rehive/user');

mongoose.connect(config.database);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use('/api/users', users);
app.use('/api/register', register);
app.use('/api/login', login);

app.use('/api/support', support);

app.use('/api/news', news);
app.use('/api/news/all', allNews);

app.use('/api/charge', charge);
app.use('/api/customer', customer);


app.use('/api/price', price);
app.use('/api/purshase', kraken);

app.use('/api/rehive', rehive);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
