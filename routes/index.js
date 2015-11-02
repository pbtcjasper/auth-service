/* global __dirname:true */

var fs   = require('fs'),
    path = require('path');

function initialize(server) {

  server.get('/', function (req, res, next) {
    res.send({ 'message': 'Restify is online and operational.' });
    return next();
  });

};

var routes = [
  'test'
];

module.exports = function(server) {
  initialize(server);

  routes.forEach(function (route) {
    try {
      require(path.join(__dirname, route))(server);
    } catch (err) {
      throw new Error("Can't load '" + route + "' route");
    }
  });
};
