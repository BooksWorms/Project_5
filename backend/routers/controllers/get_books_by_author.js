const connection = require("../../db/db");

const getBooksByAuthor = (req, res) => {
  // get the author
  const author = req.query.author;

  // inject the author in the query order to get the result
  const data = [author];
  const query = `SELECT * FROM book WHERE author = ?;`;
  connection.query(query, data, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
  });
};

// export function
module.exports = { getBooksByAuthor };
