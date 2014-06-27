/*
 * backer
 * https://github.com/nvcexploder/backer
 *
 * Copyright (c) 2014 Ben Acker
 * Licensed under the MIT license.
 */

'use strict';

var Hapi = require('hapi');
var Plugin = require('../');

var server = new Hapi.Server('localhost', 8000);

server.pack.register(Plugin, function() {
    server.start();
    console.log('Server running at ' + server.info.uri);
});
