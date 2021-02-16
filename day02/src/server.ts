import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from  'body-parser'
var server = express();

server.use(cookieParser());
server.use(bodyParser.json());
server.get('/hello', function(request, response) {
  response.send("world");
});

server.get('/repeat-my-query', function(request, response) {
  if (request.query.message == null) {
    response.send("Bad request");
    response.status(400);
  }
  if (request.query.message) {
      response.send(request.query.message);
  }
});

server.get('repeat-my-param/:message', function(request, response) {
  response.send(request.params.message);
});

server.post('/repeat-my-body', function(request, response) {
  if (!request.body) {
    response.send("Bad request");
    response.status(400);
  }
  if (request.body) {
    response.send(request.body);
  }
});

server.get('/repeat-my-header', function(request, response) {
  if (!request.header.arguments) {
    response.send("Bad request");
    response.status(400);
  }

  if (request.header.arguments) {
    response.send(request.header.arguments);
  }  
});

server.get('repeat-my-cookie', function(request, response) {
  if (!request.cookies) {
    response.send("Bad request");
    response.status(400);
  }
  if (request.cookies) {
    response.send(request.cookies);
  }
});

server.listen(8080);