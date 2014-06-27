'use strict';

var Nipple = require('nipple');
var cheerio = require('cheerio');

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

function addInfoParameter(name, ths, response) {
  ths.each(function (index, val) {
    var data = val.children[0].data;
    if(data && data.toLowerCase() == name){
      response[name] = ths.eq(index).parent().children().eq(1).text();
    }
  });
}

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    path: '/trodrigues',
    handler: function(request, reply) {
      reply('Call /trodrigues/{Futurama character name}');
    }
  });

  plugin.route({
    method: 'GET',
    path: '/trodrigues/{character}',
    handler: function(request, reply) {
      if(!request.params.character){
        return reply(new Error('No character specified'))
      }
      Nipple.get('https://en.wikipedia.org/wiki/'+request.params.character, function (err, res, html) {
        if(!err) {
          var response = {};
          var $ = cheerio.load(html);
          var infobox = $('.infobox');
          var ths = infobox.find('th');
          response.name = ths.eq(0).text();

          addInfoParameter('species', ths, response);
          addInfoParameter('origin', ths, response);
          addInfoParameter('relatives', ths, response);
          addInfoParameter('occupation', ths, response);

          reply(response);
        }
      });
    }
  });

  next();
};

exports.register.attributes = {
  name: 'trodrigues',
  version: '0.0.0'
};
