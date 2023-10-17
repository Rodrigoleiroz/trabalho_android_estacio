const http = require("http");

const hostname = "localhost";
const port = 3333;

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/plain");
  res.end("Tudo Certo Mundo?!");
});

server.listen(port, hostname, () => {
  console.log("SERVIDOR RODANDO");
});
