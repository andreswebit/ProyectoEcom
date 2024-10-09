const http = require('http');

// Crear servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola, este es tu servidor básico en Node.js');
});

// Definir el puerto en el que escuchará el servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// const server = require("./src/app");
// const PORT = 3001;
// server.listen(PORT, console.log(`Listen in port ${PORT}`));
