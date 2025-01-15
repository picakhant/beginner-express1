import express from "express";
import prisma from "./prismaClient.js";
import cors from "cors"

const server = express();

server.use(express.json());
server.use(cors())

const person = {
  name: "Aric",
  age: 20,
  isStudent: false,
};

server.get("/", (req, res) => {
  return res.status(200).json(person);
});

server.post("/create-book", async (req, res) => {
  try {
    const { name, author, release, price } = req.body;

    if (!name || !author || !release || !price) {
      return res.status(400).json({ message: "Invalid Data" });
    }

    const isNameAlreadyExist = await prisma.book.findUnique({
      where: {
        name,
      },
    });

    if (isNameAlreadyExist) {
      return res.status(400).json({ message: "Book name is already exist!" });
    }

    await prisma.book.create({
      data: {
        name,
        author,
        release,
        price,
      },
    });

    return res.status(200).json({ message: "Book created sucessful!" });
  } catch (error) {
    console.log("Error is ", error.message);
    return res.status(500).json({ message: "Interval server error!" });
  }
});

//http://localhost:4000/creat-post

server.listen(3000, () => console.log("Server is running on port 3000"));
