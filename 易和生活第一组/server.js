var express = require('express');
var mysql = require('mysql');
var app = express();
app.use(express.static('root'));

var db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '110',
    database : 'yhinformation'
});
var tableName = 'T_USER_INFO';
//U_ID U_PHONE U_PASSWORD U_UID U_LTIME

db.connect();





























app.listen(8888,function (req,res) {
    console.log('Server is running !! Port : 8888 !! ')
});
