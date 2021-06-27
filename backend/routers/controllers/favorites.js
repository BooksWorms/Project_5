const connection = require("../../db/db");

const addToFavorite = (req, res) => {
  // Get required info about the book to be added to shopping cart
  const { book_id, user_id, total_price } = req.body;

  // Inject the info in the query
  const data = [book_id, user_id, total_price];
  const query = `INSERT INTO favorite (book_id, user_id, totalPrice) VALUES (?, ?, ?);`;

  connection.query(query, data, (err, result) => {
    if (err) {
      throw err;
    }

    res.status(200).json("Added successfully");
  });
};

module.exports = { addToFavorite };