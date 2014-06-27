'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

  function mapper(request, callback) {
    // err, response
    callback(null, 'http://www.google.com/search?q=' + request.path.substr(1));
  }

  plugin.route({
    method: 'GET',
    path: '/joaosa',
    handler: function(request, reply) {
      // reply.proxy({ host: 'google.com', port: 80, protocol: 'http' });
      reply.proxy({
        mapUri: mapper
      });
    }
  });

  next();
};

exports.register.attributes = {
  name: 'joaosa',
  version: '0.0.0'
};
