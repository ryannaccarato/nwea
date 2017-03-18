var express = require('express');
var sqlite = require('sqlite3').verbose();
var bodyParser = require('body-parser');

var server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
var db = new sqlite.Database('blog.db');

server.get('/posts', function(request, response) {
    db.all('SELECT * FROM posts', function(error, rows) {
        if (error) { 
            console.log(error);
            response.send('Could not access the blog.');            
        }
        else { 
            console.log('Blog database successfully queried.');
            response.send(rows);            
        }
    });
});

server.post('/post', function(request, response) {
    var title = request.body.title;
    var body = request.body.body;
    if (title == null || body == null) 
        response.send('Post received, but data was missing. Try using url-encoding for your POST.');
    else {
        try {
            var insert = db.prepare('INSERT INTO posts(title,body) VALUES($title,$body)');
            insert.run({ $title: title, $body: body }, function(error, row) {
                if (error) {
                    console.log(error);
                    response.send('POST could not be saved.');
                }
                else {
                    console.log('New blog post added to the database.');
                    response.send('POST completed successfully.');
                }
            });
        } catch (error) { 
            console.log(error);
            response.send('POST could not be saved.');
        }
    }
});

server.listen(3000);
console.log('\nExpress server successfully setup and listening on port 3000.');