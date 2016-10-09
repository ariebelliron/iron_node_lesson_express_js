'use strict';

var fs = require('fs');
var http = require('http');

var PORT = 3001;

var server = http.createServer(function(request, response){
	console.log(request.url);
	if (request.url === '/'){
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, contents) {
    			response.write(contents);
    			response.end();
			});
		
		} else {
			response.writeHead(400, {"Content-Type": "text/html"})
			response.end('Wrong Path');
		}
  
});

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});