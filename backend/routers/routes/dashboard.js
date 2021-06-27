const express = require("express");



const registerRouter = require('./routers/routes/auth/signUp')
const loginRouter = require('./routers/routes/auth/login');


app.use(loginRouter);
app.use(registerRouter);