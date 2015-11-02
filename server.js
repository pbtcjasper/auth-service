/* global process:true */

'use strict';

var path = require('path'),
    cluster = require('cluster'),
    config = require('config'),
    app = require('./app'),
    logging = require('./logging');

// if process.env.NODE_ENV has not been set, default to development
var NODE_ENV = process.env.NODE_ENV || 'development';

exports.run = run;

function run () {
  var server = app.createServer();

  // start listening
  var port = config.get('server.port');
  server.listen(port, function () {
    console.log('%s listening at %s', server.name, server.url);
  });
}

run();
