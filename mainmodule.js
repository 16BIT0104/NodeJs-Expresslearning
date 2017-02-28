var fs = require('fs');


console.log("Executed before file reading\n");

fs.writeFile('./log1.txt','Hello1 there whats up!!!','utf8', function(error){
	if(error) throw error;
});

console.log("Executed after file reading\n");
