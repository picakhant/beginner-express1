import express from "express";
import cors from "cors";
import bookRouter from "./routes/book.js";

const server = express();

server.use(express.json());
server.use(cors());

server.use("/book", bookRouter);

server.listen(3000, () => console.log("Server is running on port 3000"));
