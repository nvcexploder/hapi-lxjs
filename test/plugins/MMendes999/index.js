'use strict';

var Lab = require('lab'),
  Hapi = require('hapi'),
  Plugin = require('../../../lib/plugins/MMendes999');

var describe = Lab.experiment;
var it = Lab.test;
var expect = Lab.expect;
var before = Lab.before;
var after = Lab.after;

describe('MMendes999', function() {
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
    expect(table[0].path).to.equal('/MMendes999');

    done();
  });

  it('Plugin route responses', function(done) {
    var table = server.table();

    expect(table).to.have.length(1);
    expect(table[0].path).to.equal('/MMendes999');

    var request = {
      method: 'GET',
      url: '/MMendes999'
    };

    server.inject(request, function(res) {
      expect(res.statusCode).to.equal(200);
      expect(res.result).to.equal('don\'t worry, be hapi!');
      done();
    });

  });
});
