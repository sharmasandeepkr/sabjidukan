/* global __dirname */
//key : a8d927fa
//secret : 066e7c250d3b26b3
var file=require('fs');
var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql2');
var bodyParser=require('body-parser');
//var sql=require('./sqlquery.js');
var mongodb=require('mongodb');
var mongoclient=require('mongodb').MongoClient;
var url="mongodb://sabjidukan:lltr24b01@ds040027.mlab.com:40027/sabjidukan"
//var url='mongodb://sabjidukan:L3j22vG5TkfRSxuHDVEoTZM16hQSmWH9r2TgnzDMwTE1mZQ8mqHF1EvPZ376ftNH3gQKS6PRloGXUQP8s3hCuQ==@sabjidukan.documents.azure.com:10255/sabjidukan?ssl=true';
mongoclient.connect(url, function(err, db) {
  if (err) throw err;
  
    console.log("Collection created!");
    
 
});

/*
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: 'a8d927fa',
  apiSecret: '066e7c250d3b26b3'
});
*/
var port = process.env.port || 8080;
app.listen(port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// viewed at http://localhost:8080

app.use(express.static('public'));



app.use(function (req,res,next) {
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Method','GET,PUT,POST,DELETE');
	next();
});

//sql connection

var array_off=[];
/*
var connection = mysql.createConnection({
   
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
*/







	
		app.post('/checkfraddr',function (req,ress) {
			
			var email=req.body.gmail;
			var query={mail:email};
			mongoclient.connect(url, function(err, db) {
				  if (err) {throw err};
				   db.collection('uaddr').find(query).toArray(function(err, result) {
				    if (err) throw err;
				    ress.send(result);
				    db.close();
				  });
				  
			});
			
		}) ;
		
		app.post('/to',function(req,ress){
			var email=req.body.mail;
			var added_mm=req.body.added_mm;
			var addedqty=req.body.added_qty;
			var oscheme={
				tdate:new Date(),
				email:email,
				added_mm:added_mm,
				addedqty:addedqty
				
			};
			mongoclient.connect(url, function(err, db) {
				  if (err) throw err;
				   db.collection('orders').insertOne(oscheme,function(err,res){
					  if(err){ress.send(err);}
					  else{
						    ress. send("ho gya");
					  console.log('yo');
					 
					  }
					db.close();
				  });
				   
			});
			
			
		});
		
		
		
		
		
app.get('/ordermore', function(req, res) {
	 res.sendFile(path.join(__dirname + '/home.html'));
});





	
	



app.get('/', function(req, res) {
	 res.sendFile(path.join(__dirname + '/home.html'));	
});

 
		
		
		app.post('/test_c_addr',function (req,ress) {
			
			
			
			mongoclient.connect(url, function(err, db) {
				  if (err) {throw err};
				  
				  
					 db.collection('veg_price').find().toArray(function(err, result) {
				    if (err) throw err;
				    ress.send(result);
				    db.close();
				  });
				  
				  
				  
				  
				  
			});
			
		}) ;
		

app.post('/default_side_nav', function(req, res) {
	 res.sendFile(path.join(__dirname + '/default-side-opt-desk.html'));	
});

app.post('/mobileFront', function(req, res) {
	
	 res.sendFile(path.join(__dirname + '/mobileFront.html'));
	
	
	
});

app.post('/deskItemContent',function(req,res){
	res.sendFile(path.join(__dirname + '/deskItemContent.html'));
});

app.post('/signupPageNow',function(req,res){
	res.sendFile(path.join(__dirname + '/open_signup.html'));
});

app.post('/checkExisitingAdd',function (req,respond) {
	mongoclient.connect(url, function(err, db) {
				  if (err) throw err;
				   db.collection('uaddr').findOne({mail:req.body.mail},function(err,mongoData){
					  if(err){respond.send("false");}
					  else{
						    respond.send(mongoData);				 
					  }
					db.close();
				  });
				   
			});
});
app.post('/editAddress',function (req,res) {
	res.sendFile(path.join(__dirname + '/editAddrForFirst.html'));
});

app.post('/pvtAddressSubmit',function (req,respond) {
				var email=req.body.mail;
				var line1=req.body.line1;
				var line2=req.body.line2;
				var pincode=req.body.pincode;
				var mobile=req.body.mobile;
				var name=req.body.name;
				var landmark=req.body.landmark;
				var city=req.body.city;
	var addrschema={
			mail: email,		
			name:name,		
			mobile: mobile,		
			pincode:pincode,		
			address:[
				{line1:line1},
				{line2:line2},
				{city:city},
				{landmark:landmark}
				
			]
		};
		
		mongoclient.connect(url, function(err, db) {
				  if (err) throw err;
				   db.collection('uaddr').update({mail:email},addrschema,{upsert:true},function(err,res){
					  if(err){respond.send(err);}
					  else{
						    respond. send("ho gya");										 
					  }
					db.close();
				  });
				   
			});	
	/*mongoclient.connect(url, function(err, db) {
				  if (err) throw err;
				   db.collection('uaddr').insertOne(addrschema,function(err,res){
					  if(err){respond.send(err);}
					  else{
						    respond. send("ho gya");										 
					  }
					db.close();
				  });
				   
			});*/
});

app.post('/contentForSignedin',function (req,res) {
	res.sendFile(path.join(__dirname + '/contentForSignedin.html'));
});

app.post('/loadCart',function (req,res) {
	res.sendFile(path.join(__dirname + '/cart.html'));
});
app.post('/vegImgSrc',function (req,res) {
	mongoclient.connect(url, function(err, db) {
				  if (err) {throw err};			  
					 db.collection('veg_img').find().toArray(function(err, result) {
				    if (err) throw err;
				    res.send(result);				    
				  });		  
				  db.close();
			});
});