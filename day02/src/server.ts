import express from 'express'
var server = express();


server.get('/hello', function(request, response) {
    response.send("world");
});

server.listen(8080);