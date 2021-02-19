import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from  'body-parser'
var server = express();

interface User {
  email:string;
  password:string;
};

let users:User[] = []
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

server.post('/cookies/register', function(request, response) {
  if (!Object.keys(request.body).length){
    response.status(400);
    response.send('Bad request');
  }
})

server.post('/cookies/login', function(request, response) {
  if (!Object.keys(request.body).length) {
    response.status(400);
    response.send('Bad request');
  }
  else {
    
  }
})

server.get('/cookies/me', function(request, response) {
  if (!request.headers.cookie) {
    response.status(401);
    response.send('unauthorized');
  }
  else {
    response.send(users.password);
    response.send(users.email);
  }
});
server.listen(8080);
