'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};
var mapper = function(request, callback) {
  callback(null, "http://trenpixster.github.io/");
}
var handler = { proxy: { mapUri: mapper } };

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    path: '/trenpixster',
    handler: function(request, reply) {
      reply('don\'t worry, be hapi!');
    }
  });

  plugin.route({
    method: 'GET',
    path: '/trenpixster-proxy',
    handler: handler
  });

  next();
};

exports.register.attributes = {
  name: 'trenpixster',
  version: '0.0.0'
};
