var userRoute  = require('./db.json');
var movieRoute = require('./movies.json');


module.exports = function() {
	return {
		users  : userRoute,
		movies : movieRoute
	}
}