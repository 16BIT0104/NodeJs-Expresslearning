var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();
app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', function(re,response) {
	response.sendFile('index.html', {root: path.join(__dirname,'./assets')});
});

app.get(/^(.+)$/, function(re, response){

	try{
		if(fs.statSync(path.join(__dirname,'./assets/', re.params[0]+'.html')).isFile()){
			response.sendFile(re.params[0]+'.html',{root: path.join(__dirname,'./assets')});
		}
	}catch(err) {
		console.log(err);
		response.sendFile('404.html', {root: path.join(__dirname,'./assets')});
	}

});


app.listen(1337 , function() {
    console.log('Listening at port 1337');
});







/*console.log(__dirname);
app.use('/cssFiles', express.static(__dirname + '/assets'));
// on the server this will be like "http://localhost:port/cssFiles"



app.get('/helloThere' , function(request, response)
{    response.send("Hello there from express!")

});

app.listen(1337 , function() {
    console.log('Listening at port 1337');
});*/