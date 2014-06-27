//Test 14.52 rdquintas
'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

    plugin.route({
        method: 'GET',
        path: '/rdquintas',
        handler: function(request, reply) {
            // reply('don\'t worry, be hapi!');
            reply.proxy({
                host: 'google.com/search?q=',
                port: 80,
                protocol: 'http'
            });
        }
    });

    next();
};

exports.register.attributes = {
    name: 'rdquintas',
    version: '0.0.0'
};
