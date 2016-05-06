// se crea la instancia de http
var http = require('http');
// Se crea la instancia del servidor donde se define el tipo del Content-type como text/plain
//Devuelve un hola mundo particular.
var server = http.createServer(function (request, response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Hola mundo desde un contenedor Docker con nodejs.");
});
//El servidor escuchará el puerto 8000.
server.listen(5000);
//se devuelve un mensaje en la consola que se ejecuta el servidor web.
console.log("Server running at http://127.0.0.1:5000/");
