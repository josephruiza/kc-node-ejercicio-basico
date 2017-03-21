/**
 * Created by gambit on 21/03/17.
 */
const http = require('http');

const server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
    response.end('Wake up, <b>Neo</b>......\n')
});

server.listen(1337, '127.0.0.1');
console.log('serv arrancado en http://127.0.0.1:1337')

