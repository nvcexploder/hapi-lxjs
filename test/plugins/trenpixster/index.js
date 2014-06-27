'use strict';

var Lab = require('lab'),
  Hapi = require('hapi'),
  Plugin = require('../../../lib/plugins/trenpixster');

var describe = Lab.experiment;
var it = Lab.test;
var expect = Lab.expect;
var before = Lab.before;
var after = Lab.after;

describe('trenpixster', function() {
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
    expect(table[0].path).to.equal('/trenpixster');
    expect(table[1].path).to.equal('/trenpixster-proxy');

    done();
  });

  it('Plugin route responses', function(done) {
    var table = server.table();

    expect(table).to.have.length(2);
    expect(table[0].path).to.equal('/trenpixster');
    expect(table[1].path).to.equal('/trenpixster-proxy');

    var request = {
      method: 'GET',
      url: '/trenpixster-proxy'
    };

    server.inject(request, function(res) {
      expect(res.statusCode).to.equal(200);
      expect(res.result).to.contain('trenpixster');
      done();
    });

  });
});
