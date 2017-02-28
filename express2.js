//GET METHOD...
var express = require('express');
var path = require('path');


var app = express();
//app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', function(req,resp) {
	//response.sendFile('index.html', {root: path.join(__dirname,'./assets')});
    
    if(req.query.firstName==undefined)
    {
    	var k="please Enter proper query!!";
    	resp.end(k);
    }
    else{
    	var response = "Hello! " + req.query.firstName;
    	resp.end(response);
    }
    

    //resp.end(JSON.stringify(req.query));

});



app.listen(1337 , function() {
    console.log('Listening at port 1337');
});