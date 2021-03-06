var basicAuth = require('basic-auth');

module.exports = {
	requireAuthentication: function(req, res, next){
		function unauthorized(res) {
		    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
		    return res.send(401);
		  };

		  var user = basicAuth(req);

		  if (!user || !user.name || !user.pass) {
		    return unauthorized(res);
		  };

		  if (user.name === 'foo' && user.pass === 'bar') {
		    return next();
		  } else {
		    return unauthorized(res);
		  };
	},
	logger: function(req, res, next) {
		var logDate = new Date().toString();
		console.log(
			logDate + ' : REQUEST: ' + req.method + ' ' + req.originalUrl
			);
		next();
	}
};