var http = require('http');

http.createServer(function (request, response) {    
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hola mundo");
    response.end();    
    
}).listen(3000, '192.168.10.10');

console.log('The server show http://192.168.10.10:3000');