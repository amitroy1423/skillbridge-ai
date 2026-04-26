const express = require('express');

const app = express();
app.use(express.json());

// require all the routes here
const authRouter = require('./routes/auth.routes');

// define routes here => http://localhost:5000/api/auth/register, http://localhost:5000/api/auth/login
app.use('/api/auth', authRouter);

module.exports = app;


