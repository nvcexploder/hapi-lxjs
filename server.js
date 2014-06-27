var Hapi = require('hapi');
var Participants = require('./participants.json');

var server = Hapi.createServer('0.0.0.0', 8080);


Participants.forEach(function (participant) {

	var participantPlugin = require('./lib/plugins/' + participant);
	server.pack.register(participantPlugin, function (err) {

		if (err) {
			console.error(err);
		}
	});
});

server.start(function (err) {

	if (err) {
		console.error(err);
		return;
	}

	console.log('Server started');
});