import express from "express";

const server = express();

server.get("/", (request, response) => {
  console.log("You Request to Server Root Dir");
  response.send("Hello World");
});

server.get("/about", (req, res) => {
  res.send("Hello About");
});

server.post("/post", (req, res) => {
  res.send("You request to post route");
});

server.get("/*", (req, res) => {
  res.send("Your page is not found, 404");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
