const express = require("express");
const bookRouter = express.Router();

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const {
  getAllBooks,
  getBooksByCategory,
  deleteBooksByID,
  addNewBooks,
  updateBooksByID,
  getBooksByAuthor,
  getBookByTitle,
} = require("./../controllers/books");

bookRouter.get("/", getAllBooks);
bookRouter.get("/Category", getBooksByCategory);
bookRouter.get("/search_title", getBookByTitle);
bookRouter.get("/search_author", getBooksByAuthor);
bookRouter.delete("/:id", authentication, authorization("admin"), deleteBooksByID);
bookRouter.post("/", authentication, authorization("admin"), addNewBooks);
bookRouter.put("/:id", authentication, authorization("admin"), updateBooksByID);

module.exports = bookRouter;
