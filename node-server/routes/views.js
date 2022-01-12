const express = require('express');
const router = express.Router();
const routeFn = require('../connection');

router.get('/create', (req, res) => {
    //routeFn.createUser(req, res);
    res.sendFile('../../views/api/create.html', {root: __dirname });
})