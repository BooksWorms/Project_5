const connection = require("../../db/db");

const addToShoppingCart = (req, res) => {
  // Get required info about the book to be added to shopping cart
  const { quantity, book_id, user_id, total_price } = req.body;

  // Inject the info in the query
  const data = [quantity, book_id, user_id, total_price];
  const query = `INSERT INTO cart (quantity, book_id, user_id, totalPrice) VALUES (?, ?, ?, ?);`;

  connection.query(query, data, (err, result) => {
    if (err) {
      throw err;
    }

    res.status(200).json("Added successfully");
  });
};

const removeFromShoppingCart = (req, res) => {
  // get book_id from body
  const book_id = req.params.book_id;

  // delete cart item by book_id
  const query = `DELETE FROM cart WHERE book_id = "${book_id}";`;
  connection.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    res.json(result);
  });
};

// Export functions
module.exports = { addToShoppingCart, removeFromShoppingCart };
