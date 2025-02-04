import { Router } from "express";
import { createBook, getBooks } from "../controller/book.js";

const bookRouter = Router()

bookRouter.get("/", getBooks)
bookRouter.post("/create-book", createBook)

export default bookRouter