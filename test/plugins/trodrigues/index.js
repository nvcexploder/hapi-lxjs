'use strict';

var Lab = require('lab'),
  Hapi = require('hapi'),
  Plugin = require('../../../lib/plugins/trodrigues');

var describe = Lab.experiment;
var it = Lab.test;
var expect = Lab.expect;
var before = Lab.before;
var after = Lab.after;

describe('trodrigues', function() {
  var server = new Hapi.Server();
  it('Plugin successfully loads', function(done) {
    server.pack.register(Plugin, function(err) {

      expect(err).to.not.exist;

      done();
    });
  });

  it('Plugin registers routes', function(done) {
    var table = server.table();

    expect(table).to.have.length(1);
    expect(table[0].path).to.equal('/trodrigues');

    done();
  });

  it('Plugin route responses', function(done) {
    var table = server.table();

    expect(table).to.have.length(1);
    expect(table[0].path).to.equal('/trodrigues');

    var request = {
      method: 'GET',
      url: '/trodrigues'
    };

    server.inject(request, function(res) {
      expect(res.statusCode).to.equal(200);
      expect(res.result).to.equal('why not zoidberg?');
      done();
    });

  });
});
