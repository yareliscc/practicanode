/*====================leer un archivo html=================================*/
//hacer la pagina html
//guardar dentro de una carpeta public y bajar una imagen y se crea como index.html
var http = require("http");
var data = require ("./alumno.json");

http.createServer((req,res)=>{
	if(req.url==="/"){
		res.writeHead(200,{"content-type": "text/json"});
		res.end(JSON.stringify(data));
	}else if(req.url==="/honor"){
		filtrarHonor(res);		
	}else if(req.url==="/deshonor"){
		filtrarDeshonor(res)	
	}else{
		res.writeHead(404,{"content-type": "text/plain"});
		res.end("404 ME equivoque");
	}
}).listen(3000);

console.log("servidor Local en el puerto 3000");

function filtrarHonor(res){
	var honor = data.filter((alumno)=>{
		return alumno.nota >=9;
	})
	res.end(JSON.stringify(honor))
}

function filtrarDeshonor(res){
	var deshonor = data.filter((alumno)=>{
		return alumno.nota < 9;
	})
	res.end(JSON.stringify(deshonor))
}