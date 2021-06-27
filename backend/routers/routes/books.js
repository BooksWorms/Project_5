const express = require("express");
const bookRouter = express.Router();
const { getAllBooks } = require("./../controllers/book");

bookRouter.get("/", getAllBooks);

module.exports = bookRouter;