// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
  
// });

// module.exports = router;

var express = require('express');
var router = express.Router();
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
var addsql ='insert into account(id, userid, password, email) value(6,?,?,?)';
var addParams=['v1','v1','v1@gmail'];
var updatesql='update account set userid=?,password=?,email=? where id=?';
var updateParams=['ytr321','ytr321','ytr321@gmail.com',6];
var deletesql= 'delete from account where id=?';
var deleteParams =[6];
var str ="";
connection.query(selectsql, function(err, rows, fields) {
  if (err) throw err;
  // console.log('The solution is: ', rows);
  str = JSON.stringify(rows);
  console.log(str);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(str);  
});
connection.end();
module.exports = router;
