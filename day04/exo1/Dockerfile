FROM  fedora32:alpine

COPY "server.ts" .
COPY "serverConfig.ts" .
COPY "tsconfig.json" .
RUN npm install -D typescript ts-node eslint @types/node
RUN npm install express @types/express
RUN npm install body-parser cookie-parser @types/cookie-parser
RUN direnv allow
RUN npm start
CMD ["npm", "run", "start"]
