const db = require("./../../db/db");
const getAllBooks = (req, res) => {
  const query = `SELECT * FROM book`;
  db.query(query, (err, results) => {
    if (err) throw err;
    res.status(201).json(results);
  });
};
module.exports = {
  getAllBooks,
};
