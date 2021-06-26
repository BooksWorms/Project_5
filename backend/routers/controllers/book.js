const db = require("./../../db/db");
// const axios =require("axios")
// const getAllBooks = (req, res) => {
// 	axios
// 	.get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDxL8MtTxPOjoIZOZ3f42uOxTPpRGDPzaA")
// 	.then((response) => {
// 	  console.log(response.data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	//   throw err;
// 	});
// };

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
