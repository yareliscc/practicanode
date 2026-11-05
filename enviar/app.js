/*==================== enviar la pagina al navegador =================================*/
var http = require("http");
var fs = require("fs");
var path = require("path");

// CORREGIDO: createServer (sin la 't')
http.createServer((req, res) => {
    console.log(`${req.method} solicitud ${req.url}`);
    
    if (req.url === "/") {
        // 1. Página principal HTML
        fs.readFile(path.join(__dirname, "public", "index.html"), "UTF-8", (err, html) => {
            if (err) {
                res.writeHead(500, { "content-type": "text/plain" });
                return res.end("Error interno al cargar index.html");
            }
            res.writeHead(200, { "content-type": "text/html" });
            res.end(html);
        });
        
    } else if (req.url.match(/\.css$/)) {
        // 2. Archivos CSS (Corregido: req.url, __dirname y Content-Type correcto)
        var cssArchivo = path.join(__dirname, "public", req.url);
        var fileStream = fs.createReadStream(cssArchivo, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(res);
        
    } else if (req.url.match(/\.jpg$/)) {
        // 3. Imágenes JPG (Corregido: Sin "UTF-8" porque es binario y Content-Type correcto)
        var imgArchivo = path.join(__dirname, "public", req.url);
        var fileStream = fs.createReadStream(imgArchivo);
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        fileStream.pipe(res);
        
    } else {
        // 4. Error 404
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("404 Pagina No encontrada");
    }
}).listen(3000);

console.log("servidor Local en el puerto 3000");
