/*
 * KidkArolis
 * https://github.com/nvcexploder/kidkarolis
 *
 * Copyright (c) 2014 Ben Acker
 * Licensed under the MIT license.
 */

'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply('don\'t worry, be hapi!');
    }
  });

  next();
};

exports.register.attributes = {
    name: 'satazor',
    version: '0.0.0'
};
