const mysql = require("mysql2");
const connection = require("../../db/db");

const getBookByTitle = (req, res) => {
  // get the book's title
  const title = req.query.title;

  // inject the title in the query order to get the result
  const data = [title];
  const query = `SELECT * FROM book WHERE title = ?;`;
  connection.query(query, data, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
  });
};

// export function
module.exports = { getBookByTitle };
