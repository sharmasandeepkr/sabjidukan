var mysql = require('mysql2');
var bodyParser=require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req,res,next) {
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Method','GET,PUT,POST,DELETE');
	next();
})

var sqlquery = mysql.createConnection({
   
		//host:"localhost",
    host: "sabjidukan.mysql.database.azure.com",
   // user:'root',
    user: "sabjidukan@sabjidukan",
   password: "lLtr24b01",
   //password:'',
    database: "sabjidukan", 
    port: 3306,
    ssl:true
});

sqlquery.connect(function (e) {
    if (!!e) {
        console.log(e);
    }
    else {
        console.log('connected');
    }});
module.exports=sqlquery;