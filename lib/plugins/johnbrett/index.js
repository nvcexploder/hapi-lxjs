'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

    plugin.route([{
        method: 'GET',
        path: '/johnbrett/{p*}',
        handler: function(request, reply) {
            reply.redirect('http://blog.johnbrett.me')
        }
    }]);

    next();
};

exports.register.attributes = {
    name: 'johnbrett',
    version: '0.1.0'
};
