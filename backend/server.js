const express = require("express");
const cors = require('cors');
const app = express();
require("dotenv").config();
app.use(express.json());
const db = require("./db/db");



//routers

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
