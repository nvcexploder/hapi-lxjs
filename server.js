var Hapi = require('hapi');
var FridayParticipants = require('./friday-participants.json');
// console.log(FridayParticipants);

var server = Hapi.createServer('0.0.0.0', 8080);

FridayParticipants.forEach(function (participant) {
	// console.log("P:",participant);
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