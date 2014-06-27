var Hapi = require('hapi');
var FridayParticipants = require('./participants.json');

var server = Hapi.createServer('0.0.0.0', 8080);


FridayParticipants.forEach(function (participant) {

	var participantPlugin = require('./lib/plugins/' + participant);
	server.pack.register(participantPlugin, function (err) {

		if (err) {
			console.error(err);
			process.exit();
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
