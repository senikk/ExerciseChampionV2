var connect = require('connect');
var serveStatic = require('serve-static');
var PORT = 8081;

connect().use(serveStatic(__dirname)).listen(PORT);
console.log("STARTING ON PORT " + PORT);