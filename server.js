var express = require('express');
var sqlite = require('sqlite3').verbose();
var server = express();
var db = new sqlite.Database('blog.db');

server.get('/posts', function(request, response) {
    db.each('SELECT * FROM posts', function(error, rows) {
        if (error) console.log(error);
        response.send(rows);
    });
});

server.listen(3000);
console.log('\nExpress server successfully setup and listening on port 3000.');