'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    path: '/bmmrodrigues',
    handler: function(request, reply) {
      reply('don\'t worry, be hapi!');
    }
  });

  next();
};

exports.register.attributes = {
  name: 'bmmrodrigues',
  version: '0.0.0'
};
