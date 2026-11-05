/*hacer una solicitud http*/
//creamos nuestro servidor http

var https = require("https"); // Nota: es mejor usar "https" en minúsculas
var fs = require("fs");

var opciones = {
	hostname : "es.wikipedia.org",
	port: 443,
	path: "/wiki/node.js",
	method: "GET"	
};

var req = https.request(opciones,(res)=>{
	var respuesta = "";
	console.log("Estatus servidor: ",res.statusCode);
	res.setEncoding("UTF-8");
	res.once("data",(data)=>{
		console.log(data);
	});
	res.on("data",(data)=>{
		console.log(data.length);
		respuesta += data;
	});
	res.on("end",()=>{
		fs.writeFile("nodejs.html",respuesta,(err)=>{
			// CORRECCIÓN AQUÍ: Agregados los paréntesis en el if
			if (err) throw err; 
			console.log("proceso terminado");
		});
	});
});

req.on("error",(error)=>{
	console.log("HUBO ERROR");
});

req.end(); // NOTA EXTRA: Recuerda cerrar la petición para que se ejecute
