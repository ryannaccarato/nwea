# nwea
NWEA Blog

To run the NWEA blog server you need to download this repo and have Nodejs installed on your machine.  Once that is complete, navigate to the location of the 'server.js' file and run the command 'node server.js'.
If the server starts, you will see a message that the server is listening on port 3000.

Open an internet browser and input the url: 'http://localhost:3000/posts'.  An array of the current posts in the database will be returned.

To add a blog post, the server needs to be listening and you will need a message sending app like Postman.  

Adding a blog post using Postman: 
    
    - Select POST and enter the following url: 'http://localhost:3000/post'
    
    - Select 'x-www-form-urlencoded'
    
    - Add the following key-value pairs:
        
        1)  key: title, value: some blog title of your choice
        
        2)  key: body, value: some blog post of your choice
    
    - Click Send to add the blog to the database.  The result will be returned and the server will output a message to the command line.
    
    - Refresh you browser to see the new post you just added.
