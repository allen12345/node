/**
* This configuration file was built using the 'Node.js server configuration builder'.
* For a more fully commented example see the file nodejs.config.js.example in the root of this module
*/
backendSettings = {
  "scheme":"http",
  "host":"node.web893.com",
  "port":8080,
  "key":"/path/to/key/file",
  "cert":"/path/to/cert/file",
  "resource":"/socket.io",
  "publishUrl":"publish",
  "serviceKey":"",
  "backend":{
  "port":80,
  "host":"node.web893.com",
  "messagePath":"/nodejs/message"},
  "clientsCanWriteToChannels":true,
  "clientsCanWriteToClients":true,
  "extensions":"",
  "debug":true,
  "transports":["websocket",
  "flashsocket",
  "htmlfile",
  "xhr-polling",
  "jsonp-polling"],
  "jsMinification":true,
  "jsEtag":true,
  "logLevel":1
};
