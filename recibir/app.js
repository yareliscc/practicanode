/*====================leer un archivo html=================================*/
//hacer la pagina html
//guardar dentro de una carpeta public y bajar una imagen y se crea como index.html
var http = require("http");
var fs = require ("fs");
//var path =require("path");

http.createServer((req,res)=>{

	if(req.method==="GET"){
		res.writeHead(200,{"content-type":"text/html"});
		fs.createReadStream("./public/formulario.html","UTF-8").pipe(res);
	}else if(req.method==="POST"){
		var data="";
		req.on("data",(chunk)=>{
			body += chunk;
		});
		req.om("end",()=>{
			res.writeHead(200,{"content-type":"text/html"});
			res.end(data);
		});
	}
}).listen(3000);

console.log("servidor Local en el puerto 3000");