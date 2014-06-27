'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

    plugin.route(
        {
            method: 'GET',
            path: '/nihildacta',
            handler: function(request, reply) {
                reply('Nihil is hapi!');
            }
        }
    );



    next();
};

exports.register.attributes = {
  name: 'nihildacta',
  version: '0.0.1'
};
