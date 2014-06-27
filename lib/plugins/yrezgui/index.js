'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    path: '/yrezgui',
    handler: function(request, reply) {
      reply('One framework to rule them all !');
    }
  });

  next();
};

exports.register.attributes = {
  name: 'yrezgui',
  version: '0.0.0'
};
