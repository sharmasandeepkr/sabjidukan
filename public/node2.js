var mysql = require('mysql'); 
var sqlseeder=function(){
            

            // viewed at http://localhost:8080



            //sql connection

            var connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'sabjidukan'
            });



            connection.connect(function (e) {
                if (!!e) {
                    console.log(e);
                }
                else {
                    console.log('connected');

                     connection.query('select * from veg_price;',function(error,result ){
                                if(error)console.log(error);
                                else {
                                    
                                    console.log(result);
                   
                                 }
                    });
    


       

};


module.exports=sqlseeder();
//app.listen(8080);