'use strict';

var Lab = require('lab'),
  Hapi = require('hapi'),
  Plugin = require('../../../lib/plugins/nihildacta');

var describe = Lab.experiment;
var it = Lab.test;
var expect = Lab.expect;
var before = Lab.before;
var after = Lab.after;

describe('nihildacta', function() {
  var server = new Hapi.Server();
  it('Plugin successfully loads', function(done) {
    server.pack.register(Plugin, function(err) {

      expect(err).to.not.exist;

      done();
    });
  });

  it('Plugin registers routes', function(done) {
    var table = server.table();

    expect(table).to.have.length(2);
    expect(table[0].path).to.equal('/nihildacta');
    expect(table[1].path).to.equal('/nihildacta/proxy/{query}');

    done();
  });

  it('Plugin route responses', function(done) {
    var table = server.table();

    expect(table).to.have.length(2);
    expect(table[0].path).to.equal('/nihildacta');
    expect(table[1].path).to.equal('/nihildacta/proxy/{query}');


    var request = {
      method: 'GET',
      url: '/nihildacta'
    };

    server.inject(request, function(res) {
      expect(res.statusCode).to.equal(200);
      expect(res.result).to.equal('Nihil is hapi!');
      done();
    });

    var request = {
      method: 'GET',
      url: '/nihildacta/proxy/soup'
    };

    server.inject(request, function(res) {
      expect(res.statusCode).to.equal(200);
      done();
    });


  });
});
