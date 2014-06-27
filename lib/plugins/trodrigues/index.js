'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    path: '/trodrigues',
    handler: function(request, reply) {
      reply('why not zoidberg?');
    }
  });

  next();
};

exports.register.attributes = {
  name: 'trodrigues',
  version: '0.0.0'
};
