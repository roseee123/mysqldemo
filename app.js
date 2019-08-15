var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'Rose',
  password: 'mitlab',
  database: 'rosedb'
});
// connection.connect(function(err) {
//   if (err) {
//     console.log('connecting error');
//     return;
//   }
//   console.log('connecting success');
// })

// app.use(function(req, res, next) {
//   req.connection;
//   next();
// })
// connection.connect(function(err) {
//   if (err) throw err;
//       console.log("Connected!");
// });

// app.get("/", function(req, res) {
//   connection.query('select * from account', function(err, rows, fields) {
//     connection.end();
//     if (!err)
//     console.log('The solution is: ', rows);
//   else
//     console.log('Error while performing Query.');
//   });
// })

connection.connect();
var selectsql ='select * from account';
var selectParams =[2];
var addsql ='insert into account(id, userid, password, email) value(6,?,?,?)';
var addParams=['v1','v1','v1@gmail'];
var updatesql='update account set userid=?,password=?,email=? where id=?';
var updateParams=['ytr321','ytr321','ytr321@gmail.com',6];
var deletesql= 'delete from account where id=?';
var deleteParams =[6];
connection.query(addsql,addParams, function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows);
});
connection.end();
module.exports = app;
