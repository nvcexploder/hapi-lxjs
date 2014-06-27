'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

    plugin.route(
        {
            method  : 'GET',
            path    : '/nihildacta',
            handler : function(request, reply) {
                reply('Nihil is hapi!');
            }
        }
    );

    var mapper = function(request, callback)
    {
        var query =  request.params.query;
        callback(null, 'http://www.google.com/search?q=' + query);
    }

    plugin.route(
        {
            method  : 'GET',
            path    : '/nihildacta/proxy/{query}',
            handler : function(request, reply) {

                reply.proxy({redirects: 2, mapUri: mapper});
            }
        }
    );

    next();
};

exports.register.attributes = {
  name: 'nihildacta',
  version: '0.0.3'
};
