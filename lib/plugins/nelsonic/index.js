'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

var mapper = function (request, callback) {
  callback(null, 'http://www.google.com/search?q='+request.params.name);
};


exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    path: '/nelsonic',
    handler: function(request, reply) {
      reply('don\'t worry, be hapi!');
    }
  });

  // plugin.route({
  //   method: 'GET',
  //   path: '/nelsonic-proxy/{name}',
  //   handler: function(request, reply) {
  //     reply.proxy({
  //       redirects:2,
  //       mapUri: mapper
  //     });
  //   }
  // });

  next();
};

exports.register.attributes = {
  name: 'nelsonic',
  version: '0.0.1'
};
