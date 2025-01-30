import { Router } from "express";
import { createBook } from "../controller/book.js";

const bookRouter = Router()

bookRouter.post("/create-book", createBook)

export default bookRouter