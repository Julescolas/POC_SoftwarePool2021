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
  if (!request.query.message) {
    response.status(400);
    response.send("Bad request");
  }
  if (request.query.message) {
      response.send(request.query.message);
  }
});

server.get('/repeat-my-param/:message', function(request, response) {
  let message = request.params.message;
  response.send(message);
});

server.post('/repeat-my-body', function(request, response) {
  if (!Object.keys(request.body).length) {
    response.send("Bad request");
    response.status(400);
  }
  if (request.body) {
    response.send(request.body);
  }
});

server.get('/repeat-my-header', function(request, response) {
  response.send(request.header('X-message'));
  if (request.header === null) {
    response.status(400);
    response.send("Bad request");
  }  
});

server.get('/repeat-my-cookie', function(request, response) {
  if (!Object.keys(request.cookies).length) {
    response.status(400);
    response.send("Bad request");
  }
  else {
    response.send(request.cookies);
  }
});

server.listen(8080);
