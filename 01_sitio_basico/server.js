var http = require('http');

http.createServer(function (request, response) {    
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Bienvenido");
    response.end();    
    
}).listen(3000,'localhost');

console.log('The server show http://192.168.10.10:3000');
