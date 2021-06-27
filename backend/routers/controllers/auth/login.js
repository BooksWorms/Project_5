const connection = require("./../../../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT* FROM users WHERE email=?  `;
  const data = [email, password];
  connection.query(query, data, async (err, result) => {
	  if (err) {
		  throw err;
		}
		else if (result.length == 0) {
			res.status(404).json("this email doesn't exist");
		} else {
			const comparison = await bcrypt.compare(password, result[0].password);
			console.log("comparison"+comparison);
			if (comparison) {
        const payload = {
          userId: result[0].user_id,
          roleId: result[0].role_id,
        };

        const options = { expiresIn: "30m" };
        let token = jwt.sign(payload, process.env.SECRET, options);
        res.status(200).json("login successfully");
      } else {
        res.status(204).json("Email does not exist");
      }
    }
  });
};

module.exports = {
  login,
};
