/*====================leer un archivo html=================================*/
//hacer la pagina html
//guardar dentro de una carpeta public y bajar una imagen y se crea como index.html
var http = require("http");
var fs = require ("fs");
var path =require("path");

http.createServer((req,res)=>{
	console.log(`${req.method} solicitud ${req.url}`);
}).listen(3000);

console.log("servidor Local en el puerto 3000");