require('../').engage();

var http = require('http');
var server = http.createServer(function (req, res) {
    res.end('beep boop: ' + req.url + '\n');
});
server.listen(8001);
