'use strict';
var Nipple = require('nipple');

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};



// MSIE status - http://status.modern.ie/features
// giphy - http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

function getFeatures (callback) {
  Nipple.get('http://status.modern.ie/features', function (err, res, payload) {
    if (err) {
      return callback(err);
    }
    var result = {};
    payload = JSON.parse(payload);
    payload.forEach(function (item) {
      var status = item.ieStatus.text;
      if (!result[status]) {
        result[status] = [];
      }
      result[status].push(item.name);
    });
    for(var key in result) {
      if (result.hasOwnProperty(key)) {
        result[key].sort();
      }
    }

    callback(null, result);
  });
}

exports.register = function (plugin, options, next) {
  plugin.route({
    method: 'GET',
    path: '/sugendran/msie',
    handler: function (request, reply) {
      getFeatures(function (err, result) {
        if (err) {
          return reply(err);
        } else {
          return reply(result);
        }
      });
    }
  });

  plugin.route({
    method: 'GET',
    path: '/sugendran',
    handler: function (request, reply) {
      reply('don\'t worry, be hapi!');
    }
  });

};

exports.register.attributes = {
  name: 'sugendran',
  version: '0.0.0'
};
