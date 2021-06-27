const express = require("express");

// import function
const { getBookByTitle } = require("../controllers/get_book_by_title");

// create router
const bookRouter = express.Router();

// connect function to router
bookRouter.get("/books", getBookByTitle);

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