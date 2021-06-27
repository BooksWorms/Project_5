const express = require("express");

const {Register} = require('./../../controllers/auth/signUp');

const registerRouter = express.Router();

registerRouter.post('/Register', Register);

module.exports = registerRouter;

// const registerRouter = require('./routers/routes/auth/signUp')
// require('dotenv').config();

// app.use(registerRouter);
