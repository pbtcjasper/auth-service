module.exports = function(server) {

  // Sample route
  server.get('/test', function (req, res, next) {
    res.send({ 'result': 'test' });
    return next();
  });

};
