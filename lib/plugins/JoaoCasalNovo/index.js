'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    path: '/JoaoCasalNovo',
    handler: function(request, reply) {
      reply('don\'t worry, be hapi!');
    }
  });

  next();
};

exports.register.attributes = {
  name: 'JoaoCasalNovo',
  version: '0.0.0'
};
