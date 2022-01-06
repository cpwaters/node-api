const express = require('express');
const app = express();
const conn = require('./connection');

app.use(express.json())

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(5555, () => console.log('Server started...'))
