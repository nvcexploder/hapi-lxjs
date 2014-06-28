'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    path: '/rjsmelo',
    handler: function(request, reply) {
      reply('Look mom I\'m hapi!');
    }
  });

  next();
};

exports.register.attributes = {
  name: 'rjsmelo',
  version: '0.0.0'
};
