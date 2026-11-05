var http = require("http");
var fs = require("fs");
var path = require("path");
// Cargamos los datos del archivo JSON
var data = require("./alumno.json"); 

// CORREGIDO: createServer (sin la 't')
http.createServer((req, res) => {
    console.log(`${req.method} solicitud ${req.url}`);
    
    if (req.url === "/") { 
        // Página principal: Muestra todos los alumnos
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(data));
        
    } else if (req.url === "/honor") {
        filtraHonor(res);
        
    } else if (req.url === "/deshonor") {
        filtraDesHonor(res);
        
    } else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("404 Request NO encontrado");
    }
}).listen(3000);

console.log("servidor Local en el puerto 3000");