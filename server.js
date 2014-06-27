var Hapi = require('hapi');
var server = Hapi.createServer('localhost', 8080);

var ana = require('./lib/plugins/ana-rodrigues');

server.start();