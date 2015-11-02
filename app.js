/* global process:true, __dirname:true */

'use strict';

var path    = require('path'),
    restify = require('restify'),
    config  = require('config'),
    routes  = require('./routes');


exports.createServer = createServer;

/*
 * Set up server
 * @return the created server
 */
function createServer () {

  var settings = {
    name: (config.has('server.name') && config.get('server.name'))
            ? config.get('server.name')
            : require(path.join(__dirname, 'package')).name
  };


  var server = restify.createServer(settings);

  server.use(restify.acceptParser(server.acceptable));
  server.use(restify.queryParser());

  server.on('NotFound', function (req, res, next) {
    console.error('404', 'No route that matches request for ' + req.url);
    res.send(404, req.url + ' was not found');
  });


  routes(server);

  return server;
}
