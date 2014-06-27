'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    path: '/axfcampos',
    handler: function(request, reply) {

      reply.redirect('http://2014.lxjs.org');

    }  
  });
    

  next();
};

exports.register.attributes = {
  name: 'axfcampos',
  version: '0.0.0'
};
