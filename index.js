const http = require("http");

const users = [
  { id: 1, name: "Amit", role: "Admin" },
  { id: 2, name: "Ravi", role: "User" },
  { id: 3, name: "Neha", role: "Manager" }
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET" && req.url === "/ping") {
    res.statusCode = 200;
    res.end(JSON.stringify({ status: "server is running" }));
  } 
  else if (req.method === "GET" && req.url === "/users") {
    res.statusCode = 200;
    res.end(JSON.stringify(users));
  } 
  else if (req.method === "GET" && req.url === "/home") {
    res.statusCode = 200;
    res.end(JSON.stringify({ status: "home" }));
  } 
  else if (req.method === "GET" && req.url === "/health") {
    res.statusCode = 200;
    res.end(JSON.stringify({ status: "health" }));
  } 
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(5500, () => {
  console.log("Server running on port 5500");
});
