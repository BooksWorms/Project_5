const express = require("express");
const cors = require("cors");
const db = require("./db/db");
require("dotenv").config();
const app = express();

//routers
const bookRouter = require("./routers/routes/book");

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use("/book", bookRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
