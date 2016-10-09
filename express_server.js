var express = require('express');
var app = express();
var middleware = require('./middleware')

// app.get('/', function(req, res){
// 	console.log('Serving String to user.');
// 	res.send('Hello Express!');
// });

var PORT = 3000;

app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about',
	function(req, res){
	res.send('About Us!');
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Express Started on port ' + PORT);
});