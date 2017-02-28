// POST method....

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser());   //this make sure that routings in express use that.


app.get('/', function(req, resp){
	resp.sendFile('index.html', {root: path.join(__dirname, './assets')});

});


app.post('/', function(req, resp){
	//resp.sendFile('index.html', {root: path.join(__dirname, './assets')});
	//var output = req.body.toString();
	var name = req.body.firstName;
	if(name=="saurav")
	{
		resp.sendFile('index2.html', {root: path.join(__dirname, './assets')});
	}
	else if(name=="krishna")
	{
		resp.sendFile('index2.html',{root: path.join(__dirname,'./assets')});
	}
	else
	{
		var k=" You have to first signup , you are not registered till now.";
		resp.end(k);
	}
	
	//resp.end(JSON.stringify(req.body));
});

app.listen(1337 , function(){
	console.log("Listening at port 1337!!");

});