var express = require('express');
var server = express();

server.get('/', function(request, response) {
    response.send('server running...');
})

server.listen(3000);
console.log('Express server successfully setup and listening on port 3000.');