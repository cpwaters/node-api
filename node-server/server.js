const express = require('express');
const app = express();
const conn = require('./connection');
const cors = require('cors');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//app.use(express.multipart({ defer: true }))

const usersRouter = require('./routes/api/users');
app.use('/api/users', usersRouter);

const stockRouter = require('./routes/api/stock');
app.use('/api/stock', stockRouter);

app.get('/', (req, res) => {res.render('pages/index');});

app.get('/users', (req, res) => {res.render('pages/users');});

app.get('/edit', (req, res) => {res.render('api/edit');});

const port = 5555;
app.listen(port, () => console.log(`Server started on port: ${port}`));

//conn.Main()
