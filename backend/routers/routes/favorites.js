const express = require("express");

// Import functions
const { addToFavorite } = require("../controllers/favorites");

// Create router
const favoriteRouter = express.Router();

// Connect function to router
favoriteRouter.post("/favorite", addToFavorite);

// Export router
module.exports = favoriteRouter;

// to be used in server.js:
/*
in requirements:
require("dotenv").config();

in routers:
const favoriteRouter = require("./routers/routes/shopping_cart");

in app routers:
app.use(favoriteRouter);
*/