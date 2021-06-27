
const connection =require('./../../../db/db');
const bcrypt =require('bcrypt')

const Register = async (req, res) => {
  const {firstName,lastName,email,password}=req.body;

  const hashedPassword = await bcrypt.hash(password, 10)
  const query = `INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?,?)`;
  const data = [firstName, lastName,email.toLowerCase(),hashedPassword ] 
    connection.query(query, data, (err, results) => {
		if(err){
      res.status(400).json(err);
    }
      res.status(201).json(results)
	  });
  };
  
  module.exports = {
    Register,
  };