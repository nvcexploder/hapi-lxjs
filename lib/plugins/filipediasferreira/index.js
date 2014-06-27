'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    path: '/filipediasferreira',
    handler: function(request, reply) {
      reply('don\'t worry, be hapi!');
    }
  });

  next();
};

exports.register.attributes = {
  pkg: require('../package.json')
};
