/*=====================CREAR UN SERVIDOR=================================*/
var http = require("http");

var servidor = http.createServer((req, res) => {
    // 1. Corregidas las comillas dentro del objeto del header
    res.writeHead(200, { "Content-Type": "text/html" });
    
    // 2. Corregido el cierre del <title> y la etiqueta </body> al final
    res.end(`<!doctype html>
    <html>
        <head>
            <title>Pagina</title>
        </head>
        <body>
            <h1>Pagina HTML</h1>
            <h2>Ruta: ${req.url}</h2>
            <h2>Método: ${req.method}</h2>
        </body>
    </html>`);
});

servidor.listen(3000, () => {
    // 3. Corregida la comilla de cierre en el console.log
    console.log("El servidor está OK en el puerto 3000");
});

// Le pegamos al navegador
// localhost:3000
