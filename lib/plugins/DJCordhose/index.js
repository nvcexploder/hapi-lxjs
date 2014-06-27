'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    path: '/DJCordhose',
    handler: function(request, reply) {
      reply('don\'t worry, be hapi! Yo!');
    }
  });

  next();
};

exports.register.attributes = {
  name: 'DJCordhose',
  version: '0.0.0'
};
