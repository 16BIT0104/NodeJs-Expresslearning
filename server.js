var http = require('http');  //http is a global module which is in-built in node.



var server = http.createServer(engine);
server.listen(1337 , function(){
	console.log("Server was hit by a request\n\n");
	
});

function engine(request,response){
	response.writeHead([200],{'content-type': 'text/plain'});
	response.end("Hey there ! from the server..Request feom page : "+ request.url);
	console.log("response");

}

