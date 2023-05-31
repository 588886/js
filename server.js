const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  console.log("server is started....!");
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write("<p style=background-color:yellow  >====서버 점검중====</p><br>");
  res.write("====점검시간 : ~11:00===");
  res.end();
});

server.listen(8000);