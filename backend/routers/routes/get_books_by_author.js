const express = require("express");

// import function
const { getBooksByAuthor } = require("../controllers/get_books_by_author");

// create router
const bookRouter = express.Router();

// connect function to router
bookRouter.get("/books", getBooksByAuthor);

module.exports = bookRouter;

// to be used in server.js:
/*
in requirements:
require("dotenv").config();

in routers:
const bookRouter = require("./routers/routes/books");

in app routers:
app.use(bookRouter);
*/